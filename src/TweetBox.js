import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({

      displayName: "Smartprince Kevoh",
      username: "smartprince_kevoh",
      verified: true,
      text: tweetMessage,
      image: tweetImage, 
      avatar: "https://lh3.googleusercontent.com/hOG4_4CEECXxwzpb6LLjZYgW1LwacNZrk7rlEa3-tL8TzPTUnfEmDMKSzpU8E3WUpcLh_rPKUt7yQz6M-wAa-guvfF5fOu_bREyIsFjCLbaQQzCc5d6_7nr8DRtyYJAeWj2jw0dWOE22OPO_lcUo7543PjWrZX5Xy5NJEnXgqm3eaKn6osfuREgFNrChLCOoKO4BRSBy2_3JGMnXyyZ2JkngtWcU9euJfVFZJmN2OyaYJadKgWSKeI0RKenStyyb0cZU2ANdb-7H_4qiHcH6Az6Y4rftERWVAAAlb7iXFhMZzJWubkHZtAEcNc_SKiKhe4yErkLzhQtSNzMCm-Omw41Qi4e6-7hzoVMtpCyUDLwW5u-9bLDust_JBvmtn0Bekuop3tzA3qtL_BNNvvJUZieAi2HEldEmYxv1bGO1dreNSDlbK_jipeT-CMBBUy2Dw4kwluB-dMBg-sjMAuDgn8WaLIdKYYWUXBZCP-8EKTUgz0o4VBAQ6uKtNACRpKPTCwTTzhuTxXbZ6_FgAURiGjLbSlvsz9qFO3h0385cXHJ5MRkIqOEYY9cfL_YWwaQutbyz4XJ3dROAdbYalmyTENzq6gtliuh1a3c7QD_SJid1jPvU0JDgWQgejXQN5JNCh0PZ2u4wYqhMbELWdX702UILrwHMySPzWoETOML6TmQsmYb4kgcd4fVNwgdZ_SYWNwzPAoKZhv3qc8I2KgdKTymxAv3-b_sW5bmxUkT5i0rvhcqw8D5fnFlwL7HqnAbqp89kh55H19YoFAWD36n3GBSQW0Vq_rHU81POpnLQ74zyJK4tP2P-ni_RqkLmspINQmAuBKMEtdT6BP6IKKZvz5iPCsZhjyS3Q42q8xAgebRfzQ6fOI74zeGnefo9fYjo0KDcK6giza5yA8UAzt0fUADoRYBtyyaUouYnOMIx9tsUWwOaJ0HOCYC5zmdZPDYEQdF6Ni6kp-DaYJzH=w548-h730-no?authuser=5"
    
    });
      setTweetMessage("");
      setTweetImage("");
  };


  return (
    <div className="tweetBox">
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://lh3.googleusercontent.com/pw/AM-JKLVpc05xTzJ0NpT69Bp2jaxph1WyGBQcffJTLMjAA0uIIRsGbmc-A2mezEnEE_KErpwriMfOr9jtaC71UBsMiSbO4bQRxuI4wNkGk58Lz5qzssTK233wyGWPdOZJJmV_grgqdtU__GD1su1GNVaz65jO1pFC4fAZ3vcadj_BWarpDPlbiyzXfeAljLgF6LzHuNJJpmkrIRqrVghMxo3A-zvZztuF1A2A46UJ18kH9RtP3nk2gXTUuXjzhdWxBUavBrfG89baBXW-QHsQuEwxPqkxhKe84dUwSwSmExXpUVbDeYZHOkeLd2bnWGXr7K1C_aLFCqnN-3tHD-RcTz8l2UnQWnjWnA32PW4hgLqwuF8HvYal5a4rkP8JXpi2OPfmNGfckxhE-C1BA3AyolVIWyX0EO3Yr_FNaj41Fp-HMK2eOy7NmKqgJ4VRyX_QnMAHnQd43IWWOX4ctDl0Y6YgeHow_HEIIlQ8DkOjqc0QUMDSEvoCsJEEngp-4v-C6jfsUkHeDeaBqUG15VMLTUmP__GW3uao3lKkuoOLVh6LbI_o9uj7oThukz_ZycRkv3sTFug_4ikCV5mVQ13sT8BwPPLcjzyQq5opjU5mxgSBA_dOvxgMeJBW8iRugvnUcRmO2MehbBreg72kP6OaVy530MksQ7ZZccWKbsxGmvZNJXRZdQb7QbRouNRk3KE70zApfGihN6IIrP3bM5a_loCHrdHhYaSKf3wbmRyI6wrE30E-O9muDGbRiA2bU0e5ySBui800szVFAL7OtqdevZxhkbiCkHj3yhwccEy2AnDueBeYzVeJVFV_j2gkKgye0YPHz38ljL9nQ1uW3ws8Gp4lUuJPHeoI-oabOYRjutgxAuXgJjohWeXqETcy_h4OJhS8KsmCjzHfVkbur3UyJOWdwD9KUsR218xlvHrQTKGy55u1Yc_FGP67k6-rVKkRpaJNK0zAeK_o2Ra_rDdnGElKXV4ztjvtVxe0GX2N-lE=w322-h242-no?authuser=5" />
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} placeholder="What's happening?" type="text" />
                {/* */}
            </div>

            <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Optional: Enter image URL..." type="text" />

            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
      
    </div>
  );
}

export default TweetBox;
