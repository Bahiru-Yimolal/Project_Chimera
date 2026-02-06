import os
import sys

SKILLS_DIR = "skills"
README_PATH = os.path.join(SKILLS_DIR, "README.md")

def fail(msg):
    print(f"❌ SPEC CHECK FAILED: {msg}")
    sys.exit(1)

def main():
    if not os.path.exists(SKILLS_DIR):
        fail("skills/ directory does not exist")

    if not os.path.exists(README_PATH):
        fail("skills/README.md is missing")

    with open(README_PATH, "r") as f:
        readme = f.read()

    skill_dirs = [
        d for d in os.listdir(SKILLS_DIR)
        if os.path.isdir(os.path.join(SKILLS_DIR, d)) and not d.startswith("__")
    ]

    for skill in skill_dirs:
        if skill not in readme:
            fail(f"Skill '{skill}' exists but is not documented in skills/README.md")

    print("✅ SPEC CHECK PASSED: All skills are documented")

if __name__ == "__main__":
    main()
