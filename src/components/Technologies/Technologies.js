import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies, from front-end to back-end, and I've worked with a variety of languages.
    </SectionText>
    <div className='tectstack'>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145">
        <img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="JavaScript" data-canonical-src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/b7e290d2aeff9829bba45e897265ceebd34b25f6f7efba4b08e1b23cfe0815e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d2532333737374242342e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/b7e290d2aeff9829bba45e897265ceebd34b25f6f7efba4b08e1b23cfe0815e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d2532333737374242342e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465" alt="PHP" data-canonical-src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&amp;logo=php&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" alt="TypeScript" data-canonical-src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/b24523991dccb1991a2b8faa8dd97f48a0944157eacb7316b32834c2e070cf09/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f676f2d2532333030414444382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676f266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/b24523991dccb1991a2b8faa8dd97f48a0944157eacb7316b32834c2e070cf09/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f676f2d2532333030414444382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676f266c6f676f436f6c6f723d7768697465" alt="Go" data-canonical-src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&amp;logo=go&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/9281daa5684971fd3325661e3dd5fea86b21a902e3741a556fb636fbf0e2f3d4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d2532334646393930302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/9281daa5684971fd3325661e3dd5fea86b21a902e3741a556fb636fbf0e2f3d4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d2532334646393930302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465" alt="AWS" data-canonical-src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/0461c95b6c3716b16477ee709148006546bf849be66ef1e4fa373d2119dff412/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f616e67756c61722d2532334444303033312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c6172266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/0461c95b6c3716b16477ee709148006546bf849be66ef1e4fa373d2119dff412/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f616e67756c61722d2532334444303033312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c6172266c6f676f436f6c6f723d7768697465" alt="Angular" data-canonical-src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&amp;logo=angular&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642">
        <img src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642" alt="Express.js" data-canonical-src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465" alt="Next JS" data-canonical-src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" alt="NodeJS" data-canonical-src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/8855980a487f9e31426fbfc2cbbfdda5aa3b7f1d390e262e652e639e911b3d87/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6573746a732d2532334530323334452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6573746a73266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/8855980a487f9e31426fbfc2cbbfdda5aa3b7f1d390e262e652e639e911b3d87/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6573746a732d2532334530323334452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6573746a73266c6f676f436f6c6f723d7768697465" alt="NestJS" data-canonical-src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&amp;logo=nestjs&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465" alt="MongoDB" data-canonical-src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/b310667470594171440f9b80f624787ea58555296d88af177788509b0d73a40b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73716c6974652d2532333037343035652e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/b310667470594171440f9b80f624787ea58555296d88af177788509b0d73a40b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73716c6974652d2532333037343035652e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465" alt="SQLite" data-canonical-src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&amp;logo=sqlite&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/918fce8d50581bd97b7133e677a78ed2cad14f970522f219daaeb6d1c81060e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/918fce8d50581bd97b7133e677a78ed2cad14f970522f219daaeb6d1c81060e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MySQL" data-canonical-src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465" alt="Postgres" data-canonical-src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/19be198b22407b49a4ea491b2900b85e09d859dbb2801e3f0c165a84b66e1506/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6172696144422d3030333534353f7374796c653d666f722d7468652d6261646765266c6f676f3d6d617269616462266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/19be198b22407b49a4ea491b2900b85e09d859dbb2801e3f0c165a84b66e1506/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6172696144422d3030333534353f7374796c653d666f722d7468652d6261646765266c6f676f3d6d617269616462266c6f676f436f6c6f723d7768697465" alt="MariaDB" data-canonical-src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&amp;logo=mariadb&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/85b8858163097e34c31ef8eeda533e1fa18be0ec8ce58f494b6b5cedc2f27196/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c61726176656c2d2532334646324432302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c61726176656c266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/85b8858163097e34c31ef8eeda533e1fa18be0ec8ce58f494b6b5cedc2f27196/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c61726176656c2d2532334646324432302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c61726176656c266c6f676f436f6c6f723d7768697465" alt="Laravel" data-canonical-src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&amp;logo=laravel&amp;logoColor=white" />
      </a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/502e0c9c3b7000dc5f3449c95c1dce1d177a3a9b5495db66e9ca35976a2452fc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f646549676e697465722d2532334546343232332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d636f646549676e69746572266c6f676f436f6c6f723d7768697465">
        <img src="https://camo.githubusercontent.com/502e0c9c3b7000dc5f3449c95c1dce1d177a3a9b5495db66e9ca35976a2452fc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f646549676e697465722d2532334546343232332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d636f646549676e69746572266c6f676f436f6c6f723d7768697465" alt="Code-Igniter" data-canonical-src="https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&amp;logo=codeIgniter&amp;logoColor=white" />
      </a>
    </div>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React / Angular / NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node / NestJS / PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="4rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP Frameworks such as Laravel / CodeIgniter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="4rem" />
        <ListContainer>
          <ListTitle>WordPress</ListTitle>
          <ListParagraph>
            Experience with <br />
           WordPress Development : Theme / Plugin Development
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
