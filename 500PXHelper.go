package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

var (
	BASE_URL    = "https://api.500px.com/v1/"
	ConsumerKey string
)

func init() {
	ConsumerKey = os.Getenv("FHPX_CONSUMER_KEY")
	if ConsumerKey == "" {
		ConsumerKey = "XsHXPWbiYTMPs31kco8wX2ZemF8agTXBAd3EGzkN"
		fmt.Println("Did not set environment variable FHPX_CONSUMER_KEY, using default", ConsumerKey)
	}
}

func Get500pxWithQuery(route string, query string, authenticate bool) ([]Submission, error) {
	url := fmt.Sprintf("%s%s?%s", BASE_URL, route, query)
	if authenticate {
		url = strings.Join([]string{url, fmt.Sprintf("consumer_key=%s", ConsumerKey)}, "&")
	}
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	defer resp.Body.Close()
	var response Response
	err = json.NewDecoder(resp.Body).Decode(&response)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	submissions := make([]Submission, len(response.Photos))
	for i, child := range response.Photos {
		submissions[i] = child
	}

	return submissions, nil
}
