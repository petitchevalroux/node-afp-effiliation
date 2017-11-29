# afp-effiliation
Effiliation affiliate feed parser

## Stream usage :
```javascript
var afpEffiliation = require("afp-effiliation");
afpEffiliation
    .getStreamByUrl("http://feeds.effiliation.com/myformat/<YOUR FEED ID>")
    .on('data', (data) => {
        console.log("data", data);
    });
```

## Fields
 * **price**: Product price including vat
 * **currency**: ISO 4217 currency code
 * **deliveryCost**: Delivery cost
 * **name**: Product name
 * **brand**: Product brand
 * **imageUrl**: Product image url
 * **clickUrl**: Tracking product url
 * **raw**: Raw product data from feed
