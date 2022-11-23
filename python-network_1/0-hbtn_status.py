#!/usr/bin/python3
'''a Python script that fetches a url'''


<<<<<<< HEAD


import urllib.request




=======
import urllib.request


>>>>>>> b29ffc9ffbe29525e55dc35df199e1b306be489f
if __name__ == '__main__':
    with urllib.request.urlopen('https://intranet.hbtn.io/status') as response:
        content = response.read()
        print("Body response:")
        print("\t- type: {}".format(type(content)))
        print("\t- content: {}".format(content))
<<<<<<< HEAD
        print("\t- utf8 content: {}".format(content.decode("utf-8")))
=======
        print("\t- utf8 content: {}".format(content.decode("utf-8")))
>>>>>>> b29ffc9ffbe29525e55dc35df199e1b306be489f
