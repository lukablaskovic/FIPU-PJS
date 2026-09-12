"""Run with python3 .githooks/test_dates.py; uses only a temporary repository."""
import os
import subprocess
import tempfile
from datetime import date
from pathlib import Path


hooks = Path(__file__).resolve().parent
with tempfile.TemporaryDirectory() as directory:
    env = {key: value for key, value in os.environ.items() if not key.startswith("GIT_")}

    def git(*args):
        return subprocess.check_output(["git", *args], cwd=directory, env=env)

    git("init", "-q")
    git("config", "user.name", "Date hook test")
    git("config", "user.email", "test@example.invalid")
    git("config", "commit.gpgsign", "false")
    git("config", "core.autocrlf", "false")
    old = "**🆙 Posljednje ažurirano: 19.1.2026.**\r\n".encode()
    today = date.today()
    new = f"**🆙 Posljednje ažurirano: {today.day}.{today.month}.{today.year}.**\r\n".encode()
    lesson = Path(directory, "WA7 - Žetoni.md")
    untouched = Path(directory, "WA1.md")
    removed = Path(directory, "deleted.md")
    for path in (lesson, untouched, removed):
        path.write_bytes(old + b"original\r\n")
    git("add", ".")
    git("commit", "-qm", "Initial content")
    git("config", "core.hooksPath", str(hooks))
    lesson.write_bytes(old + b"staged\r\n")
    git("add", lesson.name)
    lesson.write_bytes(old + b"staged\r\nunstaged\r\n")
    plain = Path(directory, "plain.md")
    plain.write_bytes(b"No date label\n")
    git("add", plain.name)
    git("rm", "-q", removed.name)
    git("commit", "-qm", "Update lesson")
    assert git("show", f"HEAD:{lesson.name}") == new + b"staged\r\n"
    assert lesson.read_bytes() == new + b"staged\r\nunstaged\r\n"
    assert git("show", f"HEAD:{untouched.name}") == old + b"original\r\n"
    assert git("show", f"HEAD:{plain.name}") == b"No date label\n"
    assert not removed.exists()
    assert not git("diff", "--cached")
    # A second run on the same date must still preserve unstaged changes.
    git("add", lesson.name)
    lesson.write_bytes(lesson.read_bytes() + b"still unstaged\r\n")
    git("commit", "-qm", "Another update")
    assert git("show", f"HEAD:{lesson.name}") == new + b"staged\r\nunstaged\r\n"
    assert lesson.read_bytes().endswith(b"still unstaged\r\n")

print("Date hook checks passed.")
