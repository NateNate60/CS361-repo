# How to use microservice

Using the microservice is pretty easy. A simple REST API has been implemented on a private personal server that I host. Simply send GET requests to http://natenate60.xyz:4004/ with the desired endpoint and the server will reply with a standard HTTP response containing a link to a picture of the desired breed. Simply use any HTTP library that can send a receive responses to GET requests, such as Python's `requests` library.

Attempting to access anything other than a listed endpoint will result in a 404 Not Found error. The list of endpoints is:

```
labrador_retriever
french_bulldog
golden_retriever
german_shepherd
poodle
bulldog
beagle
rotweiler
german_shorthaired_pointer
dachshund
pembroke_welsh_corgi
australian_shepherd
yorkshire_terrier
boxer
cavalier_king_charles_spaniel
doberman_pinscher
great_dane
miniature_schnauzer
siberian_husky
bernese_mountain
```

Sample usage using `wget`:

```
nate@sapphire-desktop:~$ wget natenate60.xyz:4004/great_dane
--2022-10-31 22:04:15--  http://natenate60.xyz:4004/great_dane
Resolving natenate60.xyz (natenate60.xyz)... 66.94.127.20
Connecting to natenate60.xyz (natenate60.xyz)|66.94.127.20|:4004... connected.
HTTP request sent, awaiting response... 200 OK
Length: 95 [text/html]
Saving to: ‘great_dane’

great_dane          100%[===================>]      95  --.-KB/s    in 0s      

2022-10-31 22:04:15 (34.0 MB/s) - ‘great_dane’ saved [95/95]

nate@sapphire-desktop:~$ cat great_dane 
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/8675eds_win.jpg/640px-8675eds_win.jpg
```