## Consumindo Api da MArvel em JS

- [API Marvel](https://developer.marvel.com/);
- Autenticação da Marvel (inglês):

    Authentication for Server-Side Applications
    Server-side applications must pass two parameters in addition to the apikey parameter:

    ts - a timestamp (or other long string which can change on a request-by-request basis)
    hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
    For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234).

- Caso tenha dificulades na criptografia, pesquise por hash e md5. Foi necessário instalar o md5 para criptografar o ts com as chaves. Caso queira somente fazer um teste poderá fazer omd5 online copiando o seu ts e chaves sem espaços ou aspas! Colando neste site:

    [md 5 Encryption](https://www.md5online.org/)

    Após isso cole o resultado na sua variavel hash do seu projeto. (lembrando, isto é caso vc não queira instalar o md5 no seu projeto);

Por Mauricio Soto