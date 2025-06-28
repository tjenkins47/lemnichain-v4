import os

# Configuration
HTML_DIR = "html"  # Folder to save new pages
TEMPLATE_PATH = "page_template.html"

# Prompt user for new page name and title
page_name = input("Enter new page filename (e.g., staking_guide.html): ").strip()
page_title = input("Enter the page title (e.g., Staking Guide): ").strip()

# Load the template
with open(TEMPLATE_PATH, "r", encoding="utf-8") as file:
    template = file.read()

# Replace placeholders
filled_template = template.replace("Page Title", page_title).replace("page_template.html", page_name)

# Ensure output directory exists
os.makedirs(HTML_DIR, exist_ok=True)

# Write the new file
output_path = os.path.join(HTML_DIR, page_name)
with open(output_path, "w", encoding="utf-8") as file:
    file.write(filled_template)

print(f"✅ New page created: {output_path}")
