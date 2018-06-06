import React from 'react'

import classes from './Main.css'
import Feature from '../Feature/Feature'
import Button from '../UI/Button/Button'
import Blog from '../Blog/Blog'
import PopUp from '../UI/PopUp/PopUp'

const features = [
  {
    title: ['superbly', 'responsive'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`,
    type: 'tv'
  },
  {
    title: ['squeeky', 'clean'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`,
    type: 'mobile'
  },
  {
    title: ['multi', 'purpose'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`,
    type: 'laptop'
  },
  {
    title: ['highly', 'flexible'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`,
    type: 'sync'
  }
]

const blogs = [
  {
    imgSrc: '/img/img-placeholder.png',
    title: 'blog title',
    content:
      'Cillum minim consequat ad fugiat labore incididunt eu eu aliquip aute laborum amet excepteur.Nulla dolore velit veniam dolor aute occaecat qui incididunt enim.'
  },
  {
    imgSrc: '/img/img-placeholder.png',
    title: 'blog title',
    content:
      'Cillum minim consequat ad fugiat labore incididunt eu eu aliquip aute laborum amet excepteur.Nulla dolore velit veniam dolor aute occaecat qui incididunt enim.'
  },
  {
    imgSrc: '/img/img-placeholder.png',
    title: 'blog title',
    content:
      'Cillum minim consequat ad fugiat labore incididunt eu eu aliquip aute laborum amet excepteur.Nulla dolore velit veniam dolor aute occaecat qui incididunt enim.'
  }
]

const posts = [
  {
    name: 'john smith',
    content:
      'Consectetur do in velit ullamco duis nisi fugiat reprehenderit dolor sint voluptate. Consequat id nostrud cillum tempor nostrud labore ut amet ullamco sit exercitation.'
  },
  {
    name: 'john smith',
    content:
      'Consectetur do in velit ullamco duis nisi fugiat reprehenderit dolor sint voluptate. Consequat id nostrud cillum tempor nostrud labore ut amet ullamco sit exercitation.'
  },
  {
    name: 'john smith',
    content:
      'Consectetur do in velit ullamco duis nisi fugiat reprehenderit dolor sint voluptate. Consequat id nostrud cillum tempor nostrud labore ut amet ullamco sit exercitation.'
  },
  {
    name: 'john smith',
    content:
      'Consectetur do in velit ullamco duis nisi fugiat reprehenderit dolor sint voluptate. Consequat id nostrud cillum tempor nostrud labore ut amet ullamco sit exercitation.'
  }
]

const main = () => {
  return (
    <main>
      <div className={classes.Border} />
      <div className={classes.MainContainer}>
        <div className={classes.FeatureContainer}>
          {features.map(el => (
            <Feature
              key={el.type}
              type={el.type}
              title={() => (
                <React.Fragment>
                  <span>{el.title[0]}</span> {el.title[1]}
                </React.Fragment>
              )}
            >
              {el.para}
            </Feature>
          ))}
        </div>
        <div className={classes.Boundary}>
          <div className={classes.Border} />
          <span>recent work</span>
        </div>
        <div className={classes.RecentWork}>
          {blogs.map((el,id) => (
            <Blog key={id} imgSrc={el.imgSrc} title={el.title} content={el.content} />
          ))}
        </div>
        <div className={classes.MainFooter}>
          <div>
            <div className={classes.Boundary}>
              <div className={classes.Border} />
              <span style={{ left: '39%' }}>Testimonials</span>
            </div>
            <div className={classes.Testi}>
              {posts.map((el,id) => <Blog key={id} title={el.name} content={el.content} />)}
            </div>
          </div>
          <div>
            <div className={classes.Boundary}>
              <div className={classes.Border} />
              <span style={{ left: '23%' }}>Developments</span>
            </div>
            <div className={classes.Dev}>
              <ul>
                <li className={classes.active}>Design</li>
                <li>Production</li>
              </ul>
              <div className={classes.DevDesc}>
                <h4>The Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates soluta sequi perspiciatis maxime, eum eos quia
                  eligendi aliquid voluptatibus! Dignissimos pariatur aspernatur
                  eum quaerat quam totam voluptates veniam itaque quibusdam?
                </p>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, ab eaque repellendus officia cupiditate laudantium
                  id facilis, optio est sint maiores nesciunt fuga omnis natus.
                  Facilis officia cum nihil placeat."
                </p>
                <Button>Read more</Button>
              </div>
            </div>
          </div>
        </div>
        <PopUp btnText="contact us">
          Get in touch with us <span>now!</span>
        </PopUp>
      </div>
    </main>
  )
}

export default main
