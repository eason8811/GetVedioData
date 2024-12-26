import re

origin = "3.14%hello*word%666"
pattern1 = r"\d\.\d+"
result1 = re.match(pattern1, origin)
print(result1)
print(result1.group())
