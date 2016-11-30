// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle"

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#222222"
});

class Transitioner extends Component {
  constructor(props) {
    super(props)
    this.state = { done: false }
  }

  componentDidMount() {
    if(this.props.auto) {setTimeout(() => this.setState({ done: true }) )}
  }

  render() {
    return (
      <div onClick={() => this.setState({ done: true })} className={`transitioner ${this.state.done && "done"}`}>
        {this.props.children}
      </div>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} >
        <Deck transition={[]} transitionDuration={500} progress="bar">
          <Slide transition={["slide"]}>
            <div style={{paddingLeft: 100, paddingRight:100, transform: 'skewY(-10deg)'}}>
              <div className="title">
                <Heading size={1} fit caps lineHeight={1} textColor="white">
                  Hey Presto,
                </Heading>
                <Heading size={1} fit caps lineHeight={1} textColor="white">
                  CSS!
                </Heading>
                </div>
                <div className="title">
                <Heading size={2} fit caps lineHeight={1} textColor="white">
                </Heading>
                <br/>
                <Heading size={2} fit caps lineHeight={1} textColor="white">
                  CSSConf AU 2016, Melbourne
                </Heading>
              </div>
            </div>
          </Slide>

          <Slide transition={["slide"]}>
            <div style={{paddingLeft: 100, paddingRight:100, transform: 'skewY(-10deg)'}}>
              <div className="title">
                <Heading size={1} fit caps lineHeight={1} textColor="white">
                  I'm Barak
                </Heading>
                <br/>
                <Heading size={5} lineHeight={1} textColor="white">
                  <span className="title">@GoFoolhardy</span>
                </Heading>
              </div>
            </div>
          </Slide>

          <Slide className="effect-container" transition={["slide", "slide"]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(magic.gif)'}}>
              <div className="effect" />
            </div>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white" style={{fontFamily:'Dining'}}>
              <span className="title maru">珍道具</span>
            </Heading>
          </Slide>

          <Slide className="effect-container" transition={["fade"]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(chindogu1.jpg)'}}>
              <div className="effect" />
            </div>
          </Slide>
          <Slide className="effect-container" transition={["fade"]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(chindogu13.jpg)'}}>
              <div className="effect" />
            </div>
          </Slide>
          <Slide className="effect-container" transition={["fade"]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(chindogu14.jpg)'}}>
              <div className="effect" />
            </div>
          </Slide>
          <Slide className="effect-container" transition={["fade"]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(chindogu15.jpg)'}}>
              <div className="effect" />
            </div>
          </Slide>

          <Slide transition={["slide"]} >
            <div>
              <Transitioner>
                <table className="rounded-corners">
                  <tbody>
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td style={{padding: 15}}><Code>border-radius</Code></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                  </tbody>
                </table>
              </Transitioner>
            </div>
          </Slide>

          <Slide className="effect-container" transition={["slide", "slide"]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(horror.gif)'}}>
              <div className="effect" />
            </div>
          </Slide>

          <Slide transition={["slide"]} >
            <div>
              <Transitioner>
                <table className="rounded-corners">
                  <tbody>
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td style={{padding: 15}}><Code>"border-radius"</Code></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                  </tbody>
                </table>
              </Transitioner>
            </div>
          </Slide>

          <Slide transition={[]} >
            <div className="done">
              <Transitioner>
                <table className="rounded-corners">
                  <tbody>
                    <tr><td style={{backgroundColor:'transparent'}}><img src="sdfsfd" alt=""/></td><td></td><td style={{backgroundColor:'transparent'}}><img src="sdfsfd" alt=""/></td></tr>
                    <tr><td></td><td style={{padding: 15}}><Code>"border-radius"</Code></td><td></td></tr>
                    <tr><td style={{backgroundColor:'transparent'}}><img src="sdfsfd" alt=""/></td><td></td><td style={{backgroundColor:'transparent'}}><img src="sdfsfd" alt=""/></td></tr>
                  </tbody>
                </table>
              </Transitioner>
            </div>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit lineHeight={1} textColor="white">
              <span className="title">CSS Standards</span>
            </Heading>
          </Slide>

          <Slide transition={[]} >
            <Layout className="standards">
              <Fill><Heading size={6}>Propose Feature</Heading></Fill>
              <Fill><Heading size={6}>Write Specs</Heading></Fill>
              <Fill><Heading size={6}>Vendors Implement</Heading></Fill>
              <Fill><Heading size={6}>Browser Adoption</Heading></Fill>
              <Fill><Heading size={6}>I CAN USE!</Heading></Fill>
            </Layout>
            <Layout className="standards">
              <Fill></Fill>
              <Fill></Fill>
              <Fill style={{color: "red", flex:2}}>
                <Appear><Heading size={5}><Text style={{color:'red', fontFamily:'Bellerose', textDecoration:'overline', marginTop:40, display:'block'}}>The Chasm</Text></Heading></Appear>
              </Fill>
              <Fill></Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} >
            <Layout>
              <Fill>
                <Image style={{width:'100%'}} src='caniuse.png'></Image>
              </Fill>
            </Layout>
          </Slide>
{/*
          <Slide className="effect-container" transition={[]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(mindblown5.gif)'}}>
              <div className="effect" />
            </div>
          </Slide> */}

          <Slide transition={[]} >
            <Layout className="standards">
              <Fill><Heading size={6}>Propose Feature</Heading></Fill>
              <Fill><Heading size={6}>Workaround</Heading></Fill>
              <Fill><Heading size={6}>I CAN USE!</Heading></Fill>
            </Layout>
          </Slide>

          <Slide transition={[]} >
            <div className="title">
              <Heading fit caps size={6}>You can make CSS!</Heading>
            </div>
          </Slide>

          <Slide className="effect-container" transition={["slide"]} style={{padding:0}}>
            <div className="effect-container" style={{backgroundImage: 'url(mindblown7.gif)'}}>
              <div className="effect" />
            </div>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Houdini</span>
            </Heading>
            <div className="title">
            <Appear>
                <Heading fit caps size={6}>The CSS Spec that will give you magic powers</Heading>
            </Appear>
          </div>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">How CSS works</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Layout className="standards">
              <Fill>
                <div className="title">
                  <Heading size={6}>Styles</Heading>
                </div>
              </Fill>
              <Fill>
                <div className="title">
                  <Heading size={6}>Layout</Heading>
                </div>
              </Fill>
              <Fill>
                <div className="title">
                  <Heading size={6}>Paint</Heading>
                </div>
              </Fill>
              <Fill>
                <div className="title">
                  <Heading size={6}>Composition</Heading>
                </div>
              </Fill>
            </Layout>
            <Layout className="standards">
              <Fill>
                <div className="title">
                  <Heading size={7}>CSS OM Cascade</Heading>
                </div>
              </Fill>
              <Fill>
              </Fill>
              <Fill>
              </Fill>
              <Fill>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">CSS Parser API</span>
            </Heading>
          </Slide>

          <CodeSlide textSize={20} transition={[]} lang="jsx" code={require("raw!./snippets/parser")} ranges={[
            { loc: [0, 0], title: "CSS Parser API" },
            { loc: [0, 3], title: "Parse CSS rules" },
            { loc: [4, 8], title: "and external stylesheets"}
          ]}/>

          <CodeSlide textSize={20} transition={[]} lang="css" code={require("raw!./snippets/parser-css")} ranges={[
            { loc: [0, 2], title: "Custom functions" },
            { loc: [3, 5], title: "and @ rules"},
            { loc: [6, 8], title: "and CSS-like values"},
            { loc: [9, 17], title: "So you could implement your own magic"},
            { loc: [18, 26], title: "And extend the language itself"}
          ]}/>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Properties & Values API</span>
            </Heading>
          </Slide>

          <CodeSlide textSize={20} transition={[]} lang="css" code={require("raw!./snippets/props")} ranges={[
            { loc: [0, 0], title: "Props & Values API" },
            { loc: [0, 3], title: "Custom props (a.k.a variables)" },
            { loc: [5, 15], title: "Register typed properties"},
            { loc: [16, 33], title: "So you could manipulate them"}
          ]}/>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Typed CSS OM</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Layout style={{alignItems:'center', 'justifyContent': 'center'}}>
              <Fit>
                <CodePane textSize={20} lang="jsx" source={`// Get width
var width = Number(getComputedStyle($0).width.split('px')[0])

// Set width
$0.style.setProperty('width', 'calc(50% + ' + width + ')')`}>
                </CodePane>
              </Fit>
            </Layout>
          </Slide>

          <CodeSlide textSize={20} transition={[]} lang="jsx" code={require("raw!./snippets/cssom")} ranges={[
            { loc: [0, 0], title: "Typed CSS OM" },
            { loc: [0, 6], title: "Get a value from the styleMap" },
            { loc: [8, 11], title: "Typed CSS Values"},
            { loc: [13, 20], title: "Computed Values"},
            { loc: [22, 34], title: "Type Operations"}
          ]}/>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Layout API</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title"><span>The </span><span><i>quick</i> </span><span><u>brown fox</u></span><span> jumps over the lazy </span><span style={{textDecoration: 'overline'}}>dog</span></span>
            </Heading>
          </Slide>

          <Slide transition={[]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title fragments"><span>The </span><span><i>quick</i> </span><span><u>brown fox</u></span> <span>jumps over the lazy </span><span style={{textDecoration: 'overline'}}>dog</span></span>
            </Heading>
          </Slide>

          <CodeSlide textSize={20} transition={[]} lang="jsx" code={require("raw!./snippets/layout")} ranges={[
            { loc: [0, 0], title: "Layout API" },
            { loc: [0, 4], title: "Define a layout class" },
            { loc: [5, 20], title: "Gather constraints"},
            { loc: [21, 37], title: "Calculate fragment layout"},
            { loc: [54, 56], title: "Register layout"},
            { loc: [58, 64], title: "and apply it"},
          ]} />

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Paint API</span>
            </Heading>
          </Slide>

          <CodeSlide textSize={20} transition={[]} lang="jsx" code={require("raw!./snippets/paint")} ranges={[
            { loc: [0, 0], title: "Paint API" },
            { loc: [0, 5], title: "Define a paint class" },
            { loc: [5, 18], title: "Canvas-like api"},
            { loc: [20, 22], title: "Register the painter"},
            { loc: [23, 28], title: "and apply it"}
          ]} />

          <Slide transition={["slide"]} >
            <Layout>
              <Fill>
                <video controls preload autoPlay>
                  <source src="demo1.mp4" type="video/mp4"/>
                </video>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} >
            <Layout>
              <Fill>
                <video controls preload autoPlay>
                  <source src="demo2.mp4" type="video/mp4"/>
                </video>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} >
            <Layout>
              <Fill>
                <video controls preload autoPlay>
                  <source src="demo4.mp4" type="video/mp4"/>
                </video>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">What's the point?</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Cross-browser compatibility</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">High-performance styles</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Your own CSS features!</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Can I Use?</span>
            </Heading>
            <span className="title">
              <Appear>
                <Heading size={2} lineHeight={1}>
                  <span className="title">nope...</span>
                </Heading>
              </Appear>
            </span>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">What you can do now...</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Get Involved!</span>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps textColor="white">
              <span className="title">This is important!</span>
            </Heading>
            <Heading size={1} fit caps textColor="white">
              <span className="title">We'll be the ones using this stuff</span>
            </Heading>
            <Appear>
              <Heading size={1} fit caps textColor="white">
                <span className="title">FOREVER!</span>
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">This stuff's all on GitHub</span>
            </Heading>
            <Appear><Heading size={5}>Review the docs</Heading></Appear>
            <Appear><Heading size={5}>Open an issue</Heading></Appear>
            <Appear><Heading size={5}>Make a PR</Heading></Appear>
          </Slide>

          <Slide transition={["slide"]}>
            <dl>
            <dt>WOW</dt>
            <dd>Houdini Taskforce</dd>
            <dd class="new-line"></dd>

            <dt>Houdini Demos</dt>
            <dd>surma</dd>
            <dd class="new-line"></dd>

            <dt>More Demos</dt>
            <dd>Ian Kilpatrick</dd>
            <dd class="new-line"></dd>

            <dt>VFX</dt>
            <dd>acjdesigns</dd>
            <dd class="new-line"></dd>

            <dt>Awesomeness!</dt>
            <dd>CSSConf Team</dd>
            <dd class="new-line"></dd>
            </dl>
          </Slide>

          <Slide transition={["slide"]} >
            <div style={{paddingLeft: 50, paddingRight:50, transform: 'skewY(-10deg)'}}>

            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">The End!</span>
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span className="title">Thanks folks</span>
            </Heading>
            <br/>
            <Heading size={5} lineHeight={1} textColor="white">
              <span className="title">@GoFoolhardy</span>
            </Heading>
            </div>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
