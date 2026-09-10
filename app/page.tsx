import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

const checks = [
  '百度与微信搜一搜基础收录',
  '豆包、Kimi、DeepSeek 可读页面结构',
  '医生资质、门店信息、设备项目一致性',
  'FAQ、问答标题、直接回答段落',
  '医疗广告合规风险排查',
  '地图、本地生活与内容平台信号',
];

const serviceCards = [
  {
    icon: FileSearch,
    title: '搜索入口打底',
    text: '梳理百度、微信搜一搜、地图、本地生活平台的诊所信息，先让患者搜索时找得到、看得懂、敢继续了解。',
  },
  {
    icon: Bot,
    title: 'AI 答案可引用',
    text: '把医生资质、项目说明、常见问题、更新日期与来源做成豆包、Kimi、DeepSeek 更容易理解的页面结构。',
  },
  {
    icon: ShieldCheck,
    title: '合规内容生产',
    text: '用卫教和选择标准解释服务，不写疗效承诺、夸张对比和低价刺激，刊出前留给医生确认。',
  },
  {
    icon: Radar,
    title: '持续追踪复查',
    text: '每月用真实患者问法做 AI 引用测试，同时看关键词、收录、咨询入口和内容缺口。',
  },
];

const process = [
  {
    time: '第 1 月',
    title: '现状体检与基础改造',
    text: '检查官网、地图、本地平台、微信入口和已有内容，完成关键词与患者问法库，改好速度、结构、收录和咨询路径。',
  },
  {
    time: '第 2-3 月',
    title: '补齐 AI 可引用条件',
    text: '上线医生页、项目页、FAQ、卫教文章、结构化信息和来源说明，开始豆包、Kimi、DeepSeek 的问答可见度测试。',
  },
  {
    time: '第 4-12 月',
    title: '内容运营与月度复查',
    text: '围绕诊疗项目、区域需求和患者疑虑持续产出内容，复查搜索表现、AI 引用结果和微信咨询路径。',
  },
];

const scenarios = [
  '北京朝阳做牙齿矫正，怎么判断医生是否靠谱？',
  '上海做皮秒前需要问清楚哪些问题？',
  '杭州儿童牙科哪类信息值得家长重点看？',
];

const faqs = [
  {
    q: 'SEO、AEO、GEO 到底有什么区别？',
    a: 'SEO 关注搜索结果里的排名与点击，AEO 关注 AI 助手是否能理解并引用你的信息，GEO 更关注生成式答案里品牌和实体信息的可见度。诊所不需要拆开做，基础信息、内容结构和可信来源可以统一规划。',
  },
  {
    q: '已经有官网了，还需要重做吗？',
    a: '先做体检。如果现有网站能稳定输出医生信息、项目 FAQ、更新日期、结构化数据和微信咨询入口，就优先优化原站。若后台和页面结构无法支持这些字段，再建议改版。',
  },
  {
    q: '会承诺让 AI 一定推荐我的诊所吗？',
    a: '不会。AI 答案受模型、位置、资料来源和用户问题影响，任何确定推荐承诺都不稳妥。我们能做的是提高信息完整度、可查证性和被引用概率，并用月度测试透明复查。',
  },
  {
    q: '内容会不会碰到医疗广告风险？',
    a: '第一版内容以医生资质、服务流程、术前术后注意事项和选择标准为主，避开疗效保证、绝对化表述、夸大对比和低价促销，正式发布前由诊所确认。',
  },
  {
    q: '为什么咨询入口只放微信？',
    a: '大陆诊所的私域承接、复诊提醒、资料补充和客服沟通通常都在微信里完成。落地页的目标不是收集一堆表单，而是把高意向访客顺畅导到微信咨询。',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首页">
          <Stethoscope size={20} aria-hidden="true" />
          <span>诊所 AI 可见度增长</span>
        </a>
        <nav aria-label="页面导航">
          <a href="#why">为什么要做</a>
          <a href="#service">服务内容</a>
          <a href="#plan">年度方案</a>
        </nav>
        <a className="wechat-link" href="#contact">
          <MessageCircle size={18} aria-hidden="true" />
          微信咨询
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="plain-label">Clinic SEO + AEO + GEO for Mainland China</p>
          <h1>患者在搜索，也在问 AI。你的诊所要同时被看见、被理解、被信任。</h1>
          <p className="hero-lede">
            我们为大陆诊所重建从搜索到微信咨询的增长路径：让官网、医生资质、项目说明、FAQ 和本地平台信息，更容易被百度、微信搜一搜以及豆包、Kimi、DeepSeek 读取和引用。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              <MessageCircle size={19} aria-hidden="true" />
              加微信做免费体检
            </a>
            <a className="secondary-action" href="#service">
              看服务怎么做
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="trust-strip" aria-label="服务重点">
            <span>豆包</span>
            <span>Kimi</span>
            <span>DeepSeek</span>
            <span>微信导流</span>
          </div>
        </div>

        <div className="diagnostic-board" aria-label="AI 回答模拟与体检单">
          <div className="board-top">
            <span>AI 问答情境模拟</span>
            <span>示意画面</span>
          </div>
          <div className="patient-question">
            上海做牙齿贴面前，怎么判断一家诊所是否靠谱？
          </div>
          <div className="answer-panel">
            <Bot size={22} aria-hidden="true" />
            <div>
              <p>
                建议先看医生资质、病例说明是否克制、收费项目是否清楚、术前评估是否完整。可优先了解：
              </p>
              <strong>____ 口腔诊所</strong>
              <span>医生资质可查 · 项目 FAQ 完整 · 微信咨询路径清晰 · 门店信息一致</span>
            </div>
          </div>
          <div className="checklist">
            {checks.map((item) => (
              <span key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="signal-section" id="why">
        <div className="section-heading">
          <h2>过去只争搜索排名，现在还要争 AI 答案里的可信来源。</h2>
          <p>
            大陆患者会在百度、小红书、抖音、微信搜一搜里交叉验证，也会直接问 AI。没被系统读懂，页面做得再漂亮也很难进入下一步咨询。
          </p>
        </div>
        <div className="signal-grid">
          <article>
            <h3>搜索可见</h3>
            <p>地区名、项目名、医生名和门店信息要能被搜索引擎收录，并在移动端快速打开。</p>
            <ul>
              <li>百度搜索与地图基础</li>
              <li>微信搜一搜入口</li>
              <li>本地生活平台一致性</li>
            </ul>
          </article>
          <article>
            <h3>AI 可读</h3>
            <p>豆包、Kimi、DeepSeek 更依赖清晰结构、可查证实体和直接回答，而不是只看宣传口号。</p>
            <ul>
              <li>问答式内容结构</li>
              <li>医生与项目实体信息</li>
              <li>来源、更新日期、FAQ</li>
            </ul>
          </article>
          <article>
            <h3>微信承接</h3>
            <p>落地页不把高意向患者困在表单里，而是把体检、咨询、资料补充和预约前沟通接到微信。</p>
            <ul>
              <li>一键添加顾问微信</li>
              <li>咨询话术与分诊标签</li>
              <li>内容沉淀到私域</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="service-section" id="service">
        <div className="section-heading">
          <h2>我们把官网、内容、本地信息和 AI 测试放进同一套增长系统。</h2>
          <p>
            不把 AEO 做成玄学，也不把 SEO 做成关键词堆砌。每一项优化都能回到页面结构、内容证据和微信咨询路径。
          </p>
        </div>
        <div className="service-grid">
          {serviceCards.map((card) => (
            <article className="service-card" key={card.title}>
              <card.icon size={28} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section">
        <div className="case-copy">
          <h2>用患者真实问法组织页面，而不是只写诊所自己想说的话。</h2>
          <p>
            第一版会按科室和城市整理问题库，把“项目怎么选、医生怎么看、风险怎么问、价格怎么理解”写成 AI 和患者都能读懂的内容。
          </p>
          <a href="#contact" className="text-action">
            让我们先测你的诊所
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="scenario-stack" aria-label="患者提问案例">
          {scenarios.map((scenario) => (
            <div className="scenario-row" key={scenario}>
              <Sparkles size={18} aria-hidden="true" />
              <span>{scenario}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <h2>签约后的第一年，按月推进，不靠一次性改版赌运气。</h2>
          <p>
            搜索收录、AI 引用和微信咨询质量都需要持续复查。我们把工作拆成能被诊所看懂的阶段。
          </p>
        </div>
        <div className="timeline">
          {process.map((step) => (
            <article key={step.time}>
              <span>{step.time}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="offer-section" id="plan">
        <div className="offer-panel">
          <div>
            <h2>年度整合增长方案</h2>
            <p>
              适合准备开业、正在改版，或发现搜索流量和咨询质量都不稳定的单一诊所品牌。
            </p>
          </div>
          <div className="price-block">
            <span>第一版建议报价</span>
            <strong>¥128,000 起 / 年</strong>
            <p>最终范围按城市、科室、现有网站基础和内容量评估。</p>
          </div>
          <ul className="offer-list">
            <li>官网结构与微信咨询路径改造</li>
            <li>SEO、AEO、GEO 基础体检与持续优化</li>
            <li>医生页、项目页、FAQ、卫教内容策划</li>
            <li>豆包、Kimi、DeepSeek 月度问答测试</li>
            <li>百度、微信搜一搜、地图与本地平台信息校准</li>
            <li>医疗广告合规表达检查与诊所确认流程</li>
          </ul>
          <a className="primary-action dark-action" href="#contact">
            <MessageCircle size={19} aria-hidden="true" />
            微信领取体检清单
          </a>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <h2>诊所经营者最常问的几个问题。</h2>
          <p>第一版先回答决策前最容易卡住的部分，方便直接拿去做微信咨询承接。</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <ChevronRight size={18} aria-hidden="true" />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <ClipboardCheck size={34} aria-hidden="true" />
          <h2>下一位患者问 AI 时，答案里能不能看见你的诊所？</h2>
          <p>
            先做一次免费可见度体检：把官网、搜索收录、本地信息、AI 问答结果和微信咨询路径放在一张清单里，一周内给出优先级建议。
          </p>
        </div>
        <div className="wechat-card">
          <span>微信咨询入口</span>
          <strong>WeChat: clinic-aeo</strong>
          <p>添加时备注“诊所体检”，我们会先确认城市、科室和现有官网。</p>
          <a className="primary-action" href="weixin://">
            <MessageCircle size={19} aria-hidden="true" />
            打开微信咨询
          </a>
        </div>
      </section>
    </main>
  );
}
