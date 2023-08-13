import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/style.css";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
          <div className="desktop">
      <div className="div">
        <div className="rectangle" />
        <div className="text-wrapper">会社概要</div>
        <div className="overlap">
          <div className="text-wrapper-2">三</div>
        </div>
        <div className="text-wrapper-3">有限会社</div>
        <div className="text-wrapper-4">深津運送</div>
        <div className="text-wrapper-5">採用情報</div>
        <div className="text-wrapper-6">採用情報</div>
        <div className="text-wrapper-7">会社概要</div>
        <img className="line" alt="Line" src="line-1.svg" />
        <img className="img" alt="Line" src="line-4.svg" />
        <img className="line-2" alt="Line" src="line-2.svg" />
        <img className="line-3" alt="Line" src="line-5.svg" />
        <div className="overlap-group">
          <div className="text-wrapper-8">業務内容</div>
        </div>
        <div className="text-wrapper-9">業務内容はこんな感じです。文章は考えてください。</div>
        <div className="text-wrapper-10">↓は他社サイトからパクりましたのでちゃんと考えましょう</div>
        <div className="text-wrapper-11">
          ・大型・中型車での幹線輸送
          <br />
          ・地域は姫路～各地方輸送又は近郊配送
          <br />
          ・一般貨物・パレット物・ケース物・その他郵便物)
        </div>
        <div className="XX">
          ・中型免許を保持しており、中型車の運転経験があること(XX年程度)
          <br />
          ・トラックが好きで仕事への情熱がある方
        </div>
        <div className="text-wrapper-12">・こんなことした経験とかを書くこと</div>
        <div className="text-wrapper-13">
          ・仕事が好きな方
          <br />
          ・トラックが好きな方
          <br />
          ・チームワークや会社全体のことを考えられる方
          <br />
          ・などなど考えましょう
        </div>
        <div className="text-wrapper-14">◆必須スキル/経験</div>
        <div className="text-wrapper-15">
          ・役割は多分こんな感じです
          <br />
          ・いろんな仕事がありますのでトラックで全国を走り回ってください
        </div>
        <div className="text-wrapper-16">◆歓迎スキル/経験</div>
        <div className="text-wrapper-17">◆求める人物像</div>
        <div className="text-wrapper-18">◆求める役割</div>
        <div className="text-wrapper-19">
          ・やりがいは多分こんな感じです
          <br />
          ・トラックで全国を走り回ることができます。
          <br />
          ・色々な地域に行くことができ、現地の人や同業者などと交流を深めることで
          <br />
          　多様な文化に生で触れることができます。
        </div>
        <div className="text-wrapper-20">◆仕事のやりがい</div>
        <div className="div-wrapper">
          <div className="text-wrapper-8">応募資格</div>
        </div>
        <div className="overlap-group-2">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="text-wrapper-21">職種/募集ポジション</div>
          <div className="rectangle-9" />
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <div className="text-wrapper-22">雇用形態</div>
          <div className="text-wrapper-23">中型車ドライバー</div>
          <div className="text-wrapper-24">給与</div>
          <div className="text-wrapper-25">勤務地</div>
          <div className="text-wrapper-26">勤務時間</div>
          <div className="text-wrapper-27">正社員</div>
          <div className="text-wrapper-28">月給XX万円〜XX万円</div>
          <div className="XXX-XXXX-XX-XXX">XXX-XXXX&nbsp;&nbsp;兵庫県姫路市四郷町坂元XXーXXX</div>
          <div className="text-wrapper-29">勤務時間を記載</div>
          <div className="text-wrapper-30">※能力・経験・前給を考慮の上、面談により決定</div>
          <div className="text-wrapper-31">※上記金額にはXX時間分のみなし残業代を含む</div>
          <img className="line-4" alt="Line" src="line-3.svg" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-32">会社名</div>
          <div className="text-wrapper-33">設立</div>
          <div className="text-wrapper-34">資本金</div>
          <div className="text-wrapper-35">所在地</div>
          <div className="text-wrapper-36">主な事業内容</div>
          <div className="text-wrapper-37">連絡先</div>
          <div className="text-wrapper-38">代表者</div>
          <div className="text-wrapper-39">有限会社 深津運送</div>
          <div className="text-wrapper-40">19XX XX XX</div>
          <div className="text-wrapper-41">XXXX万円</div>
          <div className="text-wrapper-42">〒XXXーXXXX</div>
          <div className="text-wrapper-43">一般貨物輸送業務？。考えてください。</div>
          <div className="text-wrapper-44">XXXXX@gmail.com</div>
          <div className="text-wrapper-45">代表取締役社長　楢原義則</div>
          <div className="text-wrapper-46">兵庫県姫路市四郷町坂元X-XX</div>
          <img className="line-5" alt="Line" src="line-6.svg" />
          <img className="line-6" alt="Line" src="line-7.svg" />
          <img className="line-7" alt="Line" src="line-8.svg" />
          <img className="line-8" alt="Line" src="line-9.svg" />
          <img className="line-9" alt="Line" src="line-11.svg" />
          <img className="line-10" alt="Line" src="line-10.svg" />
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-47">応募する</div>
        </div>
      </div>
    </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
