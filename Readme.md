## 500Px Photoshowcase

### To Run
1. `git clone https://github.com/dring1/500pxPhotoShowcase.git`
2. cd 500pxPhotoShowcase
4. export FHPX_CONSUMER_KEY="YOUR CONSUMER KEY"
5. go build
6. execute the produced binary from the terminal `./500pxPhotoShowcase`
7. open `http://localhost:8080/showcase/` in a browser

### Architecture

Single Page App meets the need for an application of this size, avoid the need for server side rendering.

Fetching top 100 results through `server.go` to use authenticated query.

Due to the query for popular results only returning a 100 results caching did not seem necessary.

### Access Token
Access token is stored via the 500px Javascript SDK.
The SDK enabled the quickest solution to use the access token and perform API calls on the users behalf.