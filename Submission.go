package main

type (
	Submission struct {
		Id       int    `json:"id"`
		UserId   int    `json:"user_id"`
		ImageUrl string `json:"image_url"`
		Name     string `json:"name"`
		User     struct {
			// Avatar struct {
			// 	Pic struct {
			// 		Url string `json:"https"`
			// 	} `json:"default"`
			// } `json:"avatars"`
			UserPic  string `json:"userpic_url"`
			UserName string `json:"username"`
		} `json:"user"`
	}

	Response struct {
		CurrentPage int          `json:"current_page"`
		TotalPages  int          `json:"total_pages"`
		Photos      []Submission `json:"photos"`
	}
)

//       "id": 122301599,
//       "user_id": 14280501,
//       "name": "Untitled",
//       "description": "",
//       "camera": "iPad Air 2",
//       "lens": null,
//       "focal_length": "3",
//       "iso": "25",
//       "shutter_speed": "1/2398",
//       "aperture": "2.4",
//       "times_viewed": 0,
//       "rating": 0,
//       "status": 1,
//       "created_at": "2015-09-19T22:56:48-04:00",
//       "category": 0,
//       "location": null,
//       "latitude": 17.9124361111111,
//       "longitude": -62.8033777777778,
//       "taken_at": "2015-04-17T09:51:03-04:00",
//       "hi_res_uploaded": 0,
//       "for_sale": false,
//       "width": 942,
//       "height": 1526,
//       "votes_count": 0,
//       "favorites_count": 0,
//       "comments_count": 0,
//       "nsfw": false,
//       "sales_count": 0,
//       "for_sale_date": null,
//       "highest_rating": 0,
//       "highest_rating_date": null,
//       "license_type": 0,
//       "converted": 27,
//       "collections_count": 0,
//       "crop_version": 1,
//       "privacy": false,
//       "image_url": "https://drscdn.500px.org/photo/122301599/w%3D280_h%3D280/547f05d3e870c2b05c409c45b7e8cb5f?v=1",
//       "images":  [
//          {
//           "size": 3,
//           "url": "https://drscdn.500px.org/photo/122301599/w%3D280_h%3D280/547f05d3e870c2b05c409c45b7e8cb5f?v=1",
//           "https_url": "https://drscdn.500px.org/photo/122301599/w%3D280_h%3D280/547f05d3e870c2b05c409c45b7e8cb5f?v=1",
//           "format": "jpeg"
//         }
//       ],
//       "url": "/photo/122301599/untitled-by-fgivens",
//       "positive_votes_count": 0,
//       "converted_bits": 27,
//       "store_download": false,
//       "store_print": false,
//       "store_license": false,
//       "request_to_buy_enabled": true,
//       "license_requests_enabled": false,
//       "voted": false,
//       "liked": false,
//       "disliked": false,
//       "favorited": false,
//       "purchased": false,
//       "watermark": false,
//       "image_format": "jpeg",
//       "user":  {
//         "id": 14280501,
//         "username": "fgivens",
//         "firstname": null,
//         "lastname": null,
//         "city": null,
//         "country": null,
//         "usertype": 0,
//         "fullname": "fgivens",
//         "userpic_url": "https://secure.gravatar.com/avatar/1dd8021d3c402c3b0c4e938793bcef40?s=300&r=g&d=https://pacdn.500px.org/userpic.png",
//         "userpic_https_url": "https://secure.gravatar.com/avatar/1dd8021d3c402c3b0c4e938793bcef40?s=300&r=g&d=https://pacdn.500px.org/userpic.png",
//         "cover_url": null,
//         "upgrade_status": 0,
//         "store_on": false,
//         "affection": 11,
//         "avatars":  {
//           "default":  {
//             "https": "https://secure.gravatar.com/avatar/1dd8021d3c402c3b0c4e938793bcef40?s=300&r=g&d=https://pacdn.500px.org/userpic.png"
//           },
//           "large":  {
//             "https": "https://secure.gravatar.com/avatar/1dd8021d3c402c3b0c4e938793bcef40?s=100&r=g&d=https://pacdn.500px.org/userpic.png"
//           },
//           "small":  {
//             "https": "https://secure.gravatar.com/avatar/1dd8021d3c402c3b0c4e938793bcef40?s=50&r=g&d=https://pacdn.500px.org/userpic.png"
//           },
//           "tiny":  {
//             "https": "https://secure.gravatar.com/avatar/1dd8021d3c402c3b0c4e938793bcef40?s=30&r=g&d=https://pacdn.500px.org/userpic.png"
//           }
//         }
//       },
//       "licensing_requested": false
//     }
