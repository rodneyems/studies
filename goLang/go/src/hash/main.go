package main

import (
	"crypto/sha1"
	"encoding/hex"
	"fmt"
	"math/big"
)

func GetModID(window int, accumID string, accumOwnerID string, size int) (int, error) {
	key := fmt.Sprintf("%v:%v:%v", window, accumID, accumOwnerID)
	hash, err := sha1.New().Write([]byte(key))
	if err != nil {
		return 0, err
	}
	return (hash % size), nil
}
func main() {
	// key := "oi"
	// hash := sha1.New()
	// _, err := hash.Write([]byte(key))

	// bigInt := new(big.Int)
	// hashBigTeste, success := bigInt.SetString(hex.EncodeToString(hash.Sum(nil)), 16)
	// hashString := *hashBigTeste
	// bigIntSize := new(big.Int)
	// sizeBig := bigIntSize.SetInt64(int64(100))

	// mod := sizeBig.Mod(&hashString, sizeBig).Int64()

	// fmt.Println(mod, success, err)
}

// e86256b2787ee7ff0c33d0d4c6159cd922227b79
// def hash_and_mod(window, owner_id, accum_id, mod_size):
//     key = f'{window}:{owner_id}:{accum_id}'
//     hash = hashlib.sha1(bytearray(key, 'utf-8'))
//     return int(hash.hexdigest(), 16)%mod_size

// if __name__ == '__main__':
//     window = random.randrange(1000000000)
//     for i in range(10000):
//         owner_id = random.randint(1, 6)
//         accum_id = random.randint(1, 6)
//         mod_size = 100
//         mod = hash_and_mod(window, owner_id, accum_id, mod_size)
//         print(mod)
