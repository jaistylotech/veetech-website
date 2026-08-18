import os
import shutil
import re

src_dir = r"c:\Users\Cypher\Desktop\UAE\project-veetech-main"
dest_dir = r"c:\Users\Cypher\Desktop\UAE\project-veetech-main\project-veetech-main\public\client-media"

folders = {
    r"Products\PRODUCT\CIS": r"products\cis",
    r"Products\PRODUCT\Dry gas seal system": r"products\dry-gas-seal",
    r"Products\PRODUCT\Well head": r"products\wellhead",
    r"Recent projects -\ADNOC ONSHORE - SPECTO\Panels": r"projects\adnoc",
    r"Recent projects -\HAIL AND GASHA\CIS": r"projects\hail-and-gasha-cis",
    r"Recent projects -\HAIL AND GASHA\MEG": r"projects\hail-and-gasha-meg",
    r"Recent projects -\TOTAL ENERGIES - AGUP-1": r"projects\total-energies",
    r"References": r"references",
}

def sanitize_filename(name):
    name = name.lower()
    name = re.sub(r'[^a-z0-9\.]', '-', name)
    name = re.sub(r'-+', '-', name)
    return name.strip('-')

for rel_src, rel_dest in folders.items():
    src_path = os.path.join(src_dir, rel_src)
    dest_path = os.path.join(dest_dir, rel_dest)
    
    if not os.path.exists(src_path):
        print(f"Source not found: {src_path}")
        continue
        
    os.makedirs(dest_path, exist_ok=True)
    
    for f in os.listdir(src_path):
        f_src = os.path.join(src_path, f)
        if os.path.isfile(f_src):
            sanitized = sanitize_filename(f)
            f_dest = os.path.join(dest_path, sanitized)
            shutil.copy2(f_src, f_dest)
            print(f"Copied: {sanitized}")

print("Done")
