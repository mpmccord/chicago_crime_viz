keys_file = open("api_keys.txt")
lines = keys_file.readlines()
census_api_key = lines[0].rstrip()
print(census_api_key)