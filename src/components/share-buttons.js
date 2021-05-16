import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  InstapaperShareButton,
  InstapaperIcon,
  PocketShareButton,
  PocketIcon,
} from 'react-share'

const ShareButtons = ({ShareTitle, url, twitterHandle}) => {

    return(
        <div className="share-button-wrapper">
          <h5>Sharing is Caring:</h5>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={33} round={true} bgStyle={{fill: "#01426A"}}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={ShareTitle} via={twitterHandle}>
                <TwitterIcon  size={33} round={true} bgStyle={{fill: "#01426A"}} />
          </TwitterShareButton>

          <RedditShareButton url={url} title={ShareTitle} >
            <RedditIcon  size={33} round={true} bgStyle={{fill: "#01426A"}} />
          </RedditShareButton>

          <InstapaperShareButton title={ShareTitle} >
            <InstapaperIcon  size={33} round={true} bgStyle={{fill: "#01426A"}} />
          </InstapaperShareButton>

          <PocketShareButton title={ShareTitle}>
            <PocketIcon  size={33} round={true} bgStyle={{fill: "#01426A"}} />
          </PocketShareButton>

          <EmailShareButton url={url} subject={ShareTitle}>
            <EmailIcon  size={33} round={true} bgStyle={{fill: "#01426A"}} />
          </EmailShareButton>

        </div>
      )
}
export default ShareButtons