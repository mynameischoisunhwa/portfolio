import React, { useRef, useEffect } from 'react';

import Navi from './Navi.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

import { useWindowScrollEvent } from './hooks/useWindowScrollEvent.jsx';

import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/common.css';
import icons from './assets/images/icons.js';
import images from './assets/images/images.js';
import me from './assets/images/me.jpg';

// data
const introData = [
  '안녕하세요!',
  '전진하는 개발자 최선화입니다 :)',
  'React를 이용한 FrontEnd 개발과 ',
  'Vanilla Javascript를 활용한 UI 개발을 주로 하고 있습니다.',
  // 	- frontend developer
  // - javascript developer
  // - UI developer
];

const skills = {
  frontEnd: [
    ['Javascript', icons.iconJS],
    ['React', icons.iconReact],
    ['ReactNative', icons.iconReact],
    ['Babel', icons.iconBabel],
    ['Webpack', icons.iconWebpack],
    ['Gulp', icons.iconGulp],
    ['TypeScript', icons.iconTypescript],
    ['Git', icons.iconGit],
    ['HTML5', icons.iconHtml],
    ['CSS', icons.iconCss],
    ['SASS', icons.iconSass],
    ['jQuery', icons.iconJquery],
    ['Zustand', icons.iconZustand],
    ['React Hook Form', icons.iconReactHookForm],
    ['StyledComponent', icons.iconStyledComponent],
    ['React Router Dom', icons.iconReactRouterDom],
  ],
  // axios, highchart, vite, 'Next.js',
  communication: [
    ['Jira', icons.iconJira],
    ['Confluence', icons.iconConfluence],
    ['Zeplin', icons.iconZeplin],
    ['Figma', icons.iconFigma],
  ],
  certificate: [['정보처리기사', icons.iconCertificate]],
};

const myProjects = [
  {
    title: 'HSMS 대고객플랫폼구축	현대엔지니어링',
    period: ['2022-12', '2023-10'],
    thumbnails: [
      images.hyungenie01,
      images.hyungenie02,
      images.hyungenie03,
      images.hyungenie04,
      images.hyungenie05,
      images.hyungenie06,
      images.hyungenie07,
      images.hyungenie08,
    ],
    links: [
      [
        '현지니 토탈 건물관리 플랫폼',
        'https://play.google.com/store/apps/details?id=com.hyungenie.user&hl=en-KR',
      ],
      [
        '현지니 작업자',
        'https://play.google.com/store/apps/details?id=com.hyungenie.worker&hl=en-KR',
      ],
    ],
    desc: [
      'React 웹: 어드민, 비즈웹, 일부 반응형 페이지, ReactNative 현지니 유저앱, 워커앱',
      '어드민: axios, react-hook-form, zustand, quill 등 사용한 웹',
      '공통 컴포넌트 개발 및 세차 신청 및 관리, 층별안내, 제휴서비스, 로그현황, 온보딩 등 개발',
      '대부분의 데이터를 사용자가 관리 할 수 있는 전사 프로그램 특성상 BO와의 소통이 중요했었던 것 같다. 프로젝트 끝나기 몇주전 사용자 등급별 그리고 근무지 별 전체 메뉴 노출 순서를 변경하고 관리 했어야 하는 케이스가 추가 되었었다. 이때 BO에서 대부분 정리된 API를 제공해줘서 간단히 진행 할 수 있었다.',
      '비즈웹: axios, react-hook-form, zustand, quill 등 사용한 반응형 웹',
      '비즈웹은 다양한 서비스 타겟을 가진 앱이어서 서비스 로직의 분기 처리가 좀 더 중요했었다. 서비스의 연결성으로 인해 오류가 났을 경우 신속한 원인 분석이 필요했었다. 이 때 크롬의 개발자 모드의 기능을 좀 더 자세히 배울 수 있었다.',
      'ReactNative 앱은 iOS, Android 앱',
      '유저앱과 워커앱 사용자 층을 나눠 두개의 앱을 만들었다.',
      '유저앱과 워커앱이 같은 듯 다른 요소들이 많아서 공통 모듈 관리가 중요했다.(잘 못했지만...)',
      'UI/UX 가이드를 만들면서 모달 컴포넌트 작업시 cloneElement 를 사용했다. 이때 스테이트 관리가 잘 되지 않아 결국 새로 만들어야 했었다. 신속히 대처하지 못 해 아쉬움이 많이 남는다.',
      '현재 사용하지 않고 필요 없는 것 같아도 데이터의 초기화는 무조건 넣어야하는 것 같다. 네비게이션 이동시 레이아웃이 새롭게 추가되면서 리프레시 기준이 달라지게 되었다. 이미 앱 전체 적용이 된 시점에 발견된 오류들을 새롭게 수정하는데 데이터 초기화가 잘 된 서비스들은 수정이 용이 했다.',
      '초반 가이드 제작시 타이트한 일정으로 고정적으로 만든 공통 컴포넌트들에 서비스 요건 추가로 기능이 하나하나 추가되면서 일부 개별 페이지에서 구현된 기능들을 공통화 시키기도 하고 전체 기능 추가 후 개별 페이지 재적용 하면서, 기능을 어느 선에서 모듈화를 해야하는지 매번 하는 고민에 또 빠지게 되었다.',
      '절대적 정답은 없겠지만, 세분화된 기능 단위의 컴포넌트를 유연하게 조직하기 위해 좀 더 많은 노력을 해야할 것 같다.',
    ],
  },
  {
    title: '포트폴리오',
    type: 'personal',
    period: ['2023-07'],
    desc: [
      'React Response Web 개인프로젝트',
      'webpack, babel 을 이용해 환경 설정함.',
      'Create React App 없는 환경 설정',
      'CRA로 리액트를 시작하면 불필요한 소스들을 정리해야 하는데 그런 번거로움을 하지 않을 수 있어 좋았고, 웹팩을 핸들링해보는 것 또한 재미있었다.',
      '시간이 될 때 마다 계속 업데이트 할 예정.',
    ],
  },
  {
    title: '이메일 기반 이벤트 템플릿', // TODO
    period: ['2022-10', '2022-11'],
    desc: ['HTML, SCSS, JavaScript, Gulp 를 이용한 개발'],
  },
  {
    title: '신한은행 SOL New App(UI/UX 부분)',
    period: ['2022-03', '2022-09'],
    desc: [
      'HTML, SCSS, JavaScript, Gulp 를 이용한 퍼블리싱, UI/UX 개발, 가이드 작업',
      'jQuery 제거하기: jQuery 를 제거하고 Vanilla JavaScript만 사용해 구축이 요구 사항이었다. :)',
      '1인당 600 페이지 이상의 산출물 페이지가 나와야 했다.',
      '그래서 node 를 이용한 파일 관리 및 컴파일을 통해 최대한 자동화한 환경 셋팅을 구축함',
      '후반부의 공통 가이드 수정으로 인한 디자인 변경에 대응 시, node, RegExp를 이용한 전체 검수 및 수정으로 작업 일정 최소화',
    ],
  },
  {
    title: '호비아 SFA 솔루션',
    period: ['2022-02', '2022-02'],
    desc: [
      'HTML, SCSS, JavaScript, Gulp를 이용한 UI/UX 가이드 및 템플릿 개발',
      '확정 되지 않은 데이터를 고려한 템플릿 개발은 생각보다 훨씬 더 고려할 사항이 많았다.',
      '예외처리의 중요성, 입출력 값의 범위, 초깃값 설정 등 많은 걸 배울 수 있었다.',
    ],
  },
  {
    title: 'KB국민은행 마이데이터 관리 서비스 플랫폼 구축',
    period: ['2021-06', '2022-01'],
    desc: [
      'HTML, SCSS, JavaScript를 이용한 퍼블리싱, UI/UX 개발',
      'Gulp, HighCharts, 다국어 지원, Zeplin',
      'Atomic Design Pattern: 리액트 프로젝트를 하고 난 지금 생각해 보니, 리액트와도 비슷 한 것 같다.',
      '마이데이터 인증 시스템의 단계별 로직을 잦은 서비스 로직 수정에 대응 하기 위해 컴포넌트화를 최대한 호율적으로 관리함(기능별, 최소화...).',
      '접근성 마크 획득이나 접근성 구현에 큰 어려움은 없었으나, 약시 인 경우 화면을 읽어 주더라도 스크롤 이벤트는 일어나야 하는데 이벤트 없이 특정 디바이스의 경우 웹뷰에서 스크롤 이동을 시킬수 없어 아쉬웠다.',
      'LG5: 이젠 사라졌지만, 혼자만 마진을 다르게 적용해서 난감했었다. 그래도 CSS스펙을 잘 읽어둬서 오류를 빨리 추측 할 수 있었다. 문서는 진리!',
    ],
  },
  {
    title: '한섬 구축',
    period: ['2021-01', '2021-01'],
    desc: ['코딩컨벤션 제작', '타 프로젝트 임시 서포트 함'],
  },
  {
    title: 'KB국민카드 운영 & 개선',
    period: ['2020-01', '2020-12'],
    desc: [
      'HTML, SCSS, jQuery, JavaScript를 이용한 퍼블리싱, UI 개발',
      'WAS를 통한 프로젝트 배포',
      'Zeplin, Jira를 통한 커뮤니캐이션',
      '외부 결제시스템 업체와의 연동을 위해 다양한 환경을 고려한 개발. ie6, LG 구형 폰...',
      '이벤트 로직을 짜면서 브라우저 성능 향상을 고려해 JavaScript를 작성하도록 노력함.',
    ],
  },
  {
    title: 'SKT 월드 운영 & 리뉴얼',
    period: ['2018-02', '2019-12'],
    desc: [
      'HTML, SCSS, jQuery, JavaScript를 이용한 퍼블리싱, UI 개발',
      'JIRA 시스템을 통한 배포와 커뮤니케이션',
      '각 채널들의 통합 서비스 로직의 안정성을 고려한 운영 스킬',
      'ie8의 구버전의 브라우저를 고려한 개발',
      '같은 사무실 내에 상주하시던 접근성팀과의 협업: 직접 물어 볼 수 있어 빠르게 배울 수 있었다.',
      '반응형 애플리케이션, 웹앱',
      '웹앱을 리뉴얼하면서,',
      '앱개발자분들과 협업을 통해 더 넒은 의미의 어플리캐이션 개발에 대한 관심을 가지게 되었고,',
      '웹앱으로 컴파일 된 이후, 오류 원인 분석 과정에서 전체 소스 보는 시야가 넓어지게 되었다.',
      '다양한 언어를 접하고 새로운 기술을 익히며 정보처리기사 자격증을 취득함.',
    ],
  },
  {
    title: '삼성카드 내부 복지몰 블루베리 리뉴얼',
    period: ['2017-11', '2018-01'],
    desc: [
      'HTML, SCSS, jQuery, JavaScript를 이용한 퍼블리싱 및 UI 개발.',
      '적응형 애플리케이션 제작',
      '처음으로 퍼블리싱 가이드 개발',
      '"니가 못하면 내가 하면되니까 마음대로 해봐" 라고 말해주던 PL님 덕분에 맘~ 껏 스크립트를 써 볼 수 있었다. 감사합니다.^^',
      '보안이 철저하고 인터넷이 안되는 곳에서 핸드폰으로 검색을 해가면서 작업하는게 더 익숙해졌다 ;)',
    ],
  },
  {
    title: 'SKT 다이렉트몰 운영',
    period: ['2017-09', '2017-10'],
    desc: [
      'HTML, SCSS, jQuery, JavaScript를 이용한 퍼블리싱 및 UI 개발.',
      '일회성 이벤트 페이지 제작.',
      '디자이너와의 협업으로 실험적인 UI/UX motion을 개발',
    ],
  },
  {
    title: 'KEB 하나은행 개인뱅킹시스템 등 연관 시스템 개편',
    period: ['2017-05', '2017-08'],
    desc: [
      'HTML, SCSS, jQuery을 사용해 퍼블리싱.',
      'PA도 모두 전체 희의를 참석했던 프로젝트.',
      '덕분에 프로젝트 제안과 의사결정 과정 부터 디자인으로 풀어내는 것, 일정을 재재재재 조율을 하고 퍼블리싱 후, 테스트팀의 작업 과정까지 프로젝트의 시작과 끝을 상세히 경험할수 있었다.',
      'ARIA 사용을 최소화고 시멘틱 마크업을 최대로 적용한 접근성 웹의 개념을 배울 수 있었다.',
    ],
  },
  {
    title: '대교 ELE 개정판 온라인 학습개발 및 학습관 탑재 구축',
    period: ['2017-03', '2017-04'],
    desc: [
      'HTML, SCSS, jQuery을 사용해 퍼블리싱.',
      '6개 이상의 언어로 제작되는 앱으로 다국어 지원에 대한 개념을 가질 수 있었다.',
      '첫 프로젝트 였지만, \n일정관리와 전체를 보는 눈이 뛰어 났던 PM님과 모든걸 뚝딱 해내는 PL님 덕분에 많은 걸 배울 수 있었고 좀 더 넓은 프로그래밍의 세계에 깊이 관심을 가지는 계기가 되었습니다.',
    ],
  },
];

// handler
const navClickHandler = top => {
  window.scrollTo(0, top);
};

// style
const navHeight = 48;
const style = {
  contents: {
    position: 'relative',
    display: 'flex',

    flexDirection: 'column',
    paddingTop: navHeight + 'px',
  },
};

function App() {
  const menuO = {
    home: {
      label: 'Home',
      ref: useRef(null),
      top: null,
      onClick: (label, top) => navClickHandler(top),
      active: true,
    },
    aboutMe: {
      label: 'About Me',
      ref: useRef(null),
      top: null,
      onClick: (label, top) => navClickHandler(top),
      active: false,
    },
    projects: {
      label: 'Projects',
      ref: useRef(null),
      top: null,
      onClick: (label, top) => navClickHandler(top),
      active: false,
    },
    contact: {
      label: 'Contact',
      ref: useRef(null),
      top: null,
      onClick: (label, top) => navClickHandler(top),
      active: false,
    },
  };

  const [menuOS, setMenuOS] = React.useState(menuO);

  // 컨텐츠 높이 값 가져오기
  useEffect(() => {
    const _menuOS = { ...menuOS };
    Object.keys(menuOS).map(txt => {
      const _item = menuOS[txt];
      const _top = _item.ref?.current?.offsetTop ?? null;
      _menuOS[txt].top = _top ? _top - 48 : 0;
      return [txt, _top];
    });
    setMenuOS({ ..._menuOS });
  }, []);

  // 스크롤 이벤트 등록: 네비게이션
  const scrollNaviHandler = () => {
    console.log('navi ####');

    let scrollY = window.scrollY;

    const _menuOS = { ...menuOS };
    const _keys = Object.keys(menuOS);

    _keys.map((txt, idx) => {
      const _item = menuOS[txt];

      console.log('scroll ## idx', _item.top, window.scrollY);
      if (idx < _keys.length - 1) {
        if (
          scrollY >= _item.top &&
          scrollY < _menuOS[_keys[idx + 1]]?.top
        ) {
          _menuOS[txt].active = true;
        } else {
          _menuOS[txt].active = false;
        }
      } else {
        if (scrollY >= _item.top) {
          console.log('scroll ## idx', idx);
          _menuOS[txt].active = true;
        } else {
          _menuOS[txt].active = false;
        }
      }
    });
    setMenuOS({ ..._menuOS });
  };

  useWindowScrollEvent(scrollNaviHandler);

  return (
    <div style={style.contents}>
      <Navi data={menuOS} />
      <Home ref={menuO.home.ref} data={introData} visualImage={me} />
      <AboutMe ref={menuO.aboutMe.ref} data={skills} />
      <Projects ref={menuO.projects.ref} data={myProjects} />
      <Contact ref={menuO.contact.ref} />
    </div>
  );
}

export default App;
