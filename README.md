# googleSearchToMarkdown
Will do a Google Search and return Markdown with part of result

> As Google changed its way to rank sites which are considered non-mobile friendly
> I wanted to test the ranking using a Node.js app.
> I discovered [node-google](https://github.com/jprichardson/node-google) package and made this simple app.
> It will do search and then write out MarkDown, for you to look at.

## Your IP may get blocked my Google
It is funny: Google is making a living of crawling and scraping the web, but they do not like people scraping their search :-)
Therefore you may be blocked from time to time, if you execute this code too often.

I found only one solution: Be gentle, do not search too often - wait between searches.

## Issues
I have issues with changing the `user-agent` header, which actually is part of the point of this app.
It seems that Google stop responding as I try to add that header to my request.

## Please do help improve it
I have mainly played around with Node.js, so if you have inputs please send them to me.
You may report issues, and also you may tweet me: [netsi1964](https://twitter.com/netsi1964) 


Thank you!


Sten Hougaard