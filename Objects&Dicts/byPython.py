

import random


def createDict(list1, list2):
    obj = {}
    for i in range(0, len(list1)):
        if (i < len(list2)):
            obj[list1[i]] = list2[i]
        else:
            obj[list1[i]] = None
    return obj

a = ["id", "value", "param1", "param2", "param3", "param4", "param5"]
b = []
n = 5
for i in range(0, n):
    b.append(random.randint(0,100))
print(createDict(a, b))