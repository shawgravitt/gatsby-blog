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

const ShareButtons = ({ShareTitle, ShareUrl, twitterHandle, tags}) => {

    return(
        <div>
          <FacebookShareButton url={ShareUrl} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={ShareUrl} title={ShareTitle} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <RedditShareButton url={ShareUrl} title={ShareTitle} >
            <RedditIcon  size={40} round={true} />
          </RedditShareButton>

          <EmailShareButton url={ShareUrl} subject={ShareTitle}>
            <EmailIcon  size={40} round={true} />
          </EmailShareButton>

        </div>
      )

}
export default ShareButtons