import React from 'react'

import classes from './Footer.css'

const footer = props => {
  return (
    <React.Fragment>
      <footer>
        <div className={classes.FooterContainer}>
          <section>
            <h4>About us</h4>
            <p>
              Adipisicing eu enim cillum tempor. Aliqua nisi exercitation irure
              veniam ut.
            </p>
            <span>123 Street Name</span>
            <span>Fugiat ea labore </span>
            <span>Lodon</span>
            <span>+44 xx xxxxx</span>
          </section>
          <section>
            <h4>lastest tweets</h4>
            <p>
              Ut fugiat tempor laborum deserunt aute mollit occaecat quis
              ullamco nisi.
            </p>
            <p>
              Irure amet voluptate et non fugiat.Exercitation magna consequat
              ullamco anim.
            </p>
          </section>
          <section className={classes.LatestPosts}>
            <h4>Latest posts</h4>
            <span>Occaecat aliquip duis .</span>
            <span>Irure amet excepteur commodo consequat cupidatat.</span>
            <span>Minim cillum fugiat do commodo</span>
            <span>Exercitation culpa magna temp.</span>
          </section>
          <section>
            <h4>flickr</h4>
            <div className={classes.FlickrContainer}>
              {[...Array(8)].map((el, id) => (
                <React.Fragment key={id}>
                  <div />
                </React.Fragment>
              ))}
            </div>
          </section>
        </div>
      </footer>
      <section className={classes.Credit}>
        <div>
          <span>copyright &copy; 2018 rangigo. all rights reservered.</span>
          <i className="fab fa-instagram fa-2x" />
          <i className="fab fa-google-plus-square fa-2x" />
          <i className="fab fa-facebook fa-2x" />
          <i className="fab fa-twitter fa-2x" />
          <i className="fab fa-pinterest-square fa-2x" />
          <i className="fab fa-vimeo fa-2x" />
        </div>
      </section>
    </React.Fragment>
  )
}

export default footer
