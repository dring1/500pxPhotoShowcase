package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.GET("/popular", popular)
	r.Static("/static", "./client/dist")
	r.Run(":8080") // listen and serve on 0.0.0.0:8080
}

func popular(c *gin.Context) {
	resp, err := Get500pxWithQuery("photos", "feature=popular&sort=created_at&image_size=3&include_store=store_download&include_states=voted&rpp=100", true)
	if err != nil {
		c.JSON(500, gin.H{
			"msg": "Unable to access 500px api server",
		})
	}
	c.JSON(200, resp)
}
