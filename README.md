This is a URL shortening service executed with “Node JS” and “Express” framework for cleaner structure. 
Majorly, it consists of three endpoints: 

•	/encode Encodes a URL to a shortened URL

•	/decode Decodes a shortened URL to its original URL

•	/statistic/{url_path} e.g V60sqSFWu Return basic stat of a short URL path.

1.	The Node JS app has been hosted on Heroku for easy testing purposes.
To encode, the original URL can be sent using a POST request to the following endpoint https://indicina-urlshortner.herokuapp.com/encode in a JSON format. 
Example
{
    "url": "https://www.amazon.com"
}
This will return the short URL
{
    "status": "Ok",
    "shortUrl": "http://sh.l/bkv_D8JHh"
}

And if Original URL already exists in database, it will return the already created short URL in the database, 
http://sh.l/bkv_D8JHh

2.	To decode, the shortened URL can be sent as a GET request to the following endpoint 
https://indicina-urlshortner.herokuapp.com/decode
In JSON format, such as:
{
    "shortUrl": "http://sh.l/MfBaXjFuZ"
}
For this request, it returns the original URL if successful, So the response for this would be a JSON file containing the original URL.

![image](https://user-images.githubusercontent.com/83662561/156162826-2b5b23a3-f1d7-4e0c-a022-45d729b8ad50.png)


3.	The third returns number of clicks of each URL, just to keep track of site’s traffic.It takes I no data in the body but takes in the short URL id as a parameter in the URL, Example https://indicina-urlshortner.herokuapp.com/statistic/MfBaXjFuZ
Where MfBaXjFuZ is the URL id in this case. 
A sample response should be like: 
{
    "status": "Ok",
    "url": "https://www.microsoft.com",
    "clicks": 2
}

For clarity, I created a table of all the data that can be viewed on the landing page of the application: https://indicina-urlshortner.herokuapp.com
Following this link, you should see a table like this: 

![image](https://user-images.githubusercontent.com/83662561/156162972-0680d3c6-f177-4581-b62c-877274f98e19.png)

 
Checkout postman documentation for testing and more info
https://documenter.getpostman.com/view/18127055/UVkqruuM
