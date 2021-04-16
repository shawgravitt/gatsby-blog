import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({ShareTitle, url, twitterHandle, tags}) => {

    return(
        <div>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={ShareTitle} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <RedditShareButton url={url} title={ShareTitle} >
            <RedditIcon  size={40} round={true} />
          </RedditShareButton>

          <EmailShareButton url={url} subject={ShareTitle}>
            <EmailIcon  size={40} round={true} />
          </EmailShareButton>

        </div>
      )

}
export default ShareButtons