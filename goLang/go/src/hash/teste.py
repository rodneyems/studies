# import random
import hashlib
def hash_and_mod():
    key = f'oi'
    hash = hashlib.sha1(bytearray(key, 'utf-8'))
    teste = bytearray(key, 'utf-8')
    print(hash.hexdigest())
    return int(hash.hexdigest(), 16)%100

if __name__ == '__main__':
    print(hash_and_mod())

    # window = random.randrange(1000000000)
    # for i in range(10000):
    #     owner_id = random.randint(1, 6)
    #     accum_id = random.randint(1, 6)
    #     mod_size = 100
    #     mod = hash_and_mod(window, owner_id, accum_id, mod_size)
    #     print(mod)
