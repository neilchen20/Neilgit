import { defineStore } from 'pinia'
import { ref } from 'vue'
import tplusProduct from '../assets/img/Projects/T+.png'
import syscomProduct from '../assets/img/Projects/retail.png'
import eslite2023Product from '../assets/img/Projects/2023eslite.png'
import eslite2024Product from '../assets/img/Projects/2024eslite.png'
import aerobileProduct from '../assets/img/Projects/aero.png'
import friendsProduct from '../assets/img/Projects/friends.png'
import geecProduct from '../assets/img/Projects/geec.png'
import jmrqProduct from '../assets/img/Projects/jmrq.png'
import kiriProduct from '../assets/img/Projects/kiri.png'
import mcidemoProduct from '../assets/img/Projects/mcidemo.png'
import cloudHISProject from '../assets/img/Projects/cloudhis.png'


export const useProjectsStore = defineStore('projects', () => {
  const ProjectsData = ref([]) // 初始化為數組
  const ProjectsHighLight = ref([]) // 用於存儲高亮項目

  // 專案資料
  const mockData = [
    {
      id: 1,
      attributes: {
        projectTitle: "TaiwanPlus",
        projectDescription: "參與既有專案的擴充開發，負責在 Vue 2 環境下新增一個完整頁面，包含切版與 API 串接。確保 UI/UX 一致性，並與現有系統整合，提升專案的可擴展性與功能完整度。",
        projectLink: "https://taiwanplus.com",
        projectDate: "2023-10-01",
        projectHighLight: false,
        projectSkill: "Vue,HTML, CSS, JavaScript",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: tplusProduct
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 2,
      attributes: {
        projectTitle: "2023誠品年度閱讀報告",
        projectDescription: "和團隊協作的切版案子。",
        projectLink: "https://events.eslite.com/2023/231205-2023report/index.html",
        projectDate: "2023-12-01",
        projectHighLight: false,
        projectSkill: "HTML, CSS, Bootstrap, JavaScript, Swiper.js",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: eslite2023Product
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 3,
      attributes: {
        projectTitle: "2024誠品年度閱讀報告",
        projectDescription: "和團隊協作的切版案子。",
        projectLink: "https://events.eslite.com/campaign/readingreport/index.html",
        projectDate: "2024-12-10",
        projectHighLight: false,
        projectSkill: "HTML, CSS, Bootstrap, JavaScript, Swiper.js, GSAP.js, AOS.js",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: eslite2024Product
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 4,
      attributes: {
        projectTitle: "凌羣電腦智慧零售雲",
        projectDescription: "入職科技公司後第一個切版的案子。",
        projectLink: "https://retail.syscom.com.tw/",
        projectDate: "2023-08-22",
        projectHighLight: false,
        projectSkill: "HTML, CSS, Bootstrap, JavaScript",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: syscomProduct
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 5,
      attributes: {
        projectTitle: "中國醫藥大學綠創體驗中心",
        projectDescription: "3D 互動式首頁模型 - 使用 Three.js 打造沉浸式的 3D 互動體驗，提升網站的視覺吸引力與使用者參與度。",
        projectLink: "http://geec.quarter.com.tw/home",
        projectDate: "2024-05-31",
        projectHighLight: true,
        projectSkill: "HTML, CSS, Bootstrap, JavaScript, Three.js",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: geecProduct
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 6,
      attributes: {
        projectTitle: "瑞期化工",
        projectDescription: "化工廠官網 - 建置形象網站，並且新增產品頁和搜尋頁可以快速搜尋產品。",
        projectLink: "https://www.jmrq.com/",
        projectDate: "2024-07-04",
        projectHighLight: false,
        projectSkill: "HTML, CSS, Bootstrap, JavaScript, Fuse.js",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: jmrqProduct
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 7,
      attributes: {
        projectTitle: "KIRI國際原住民族文創園區",
        projectDescription: "該網站整合 Vue 進行前端開發，負責樓層簡介的動態切版與串接，提供直覺化的樓層分類導覽體驗。專案採用 Piranha CMS 作為後端架構，並使用 Vue.js 開發後台 CRUD 系統，讓管理者能輕鬆控制網站內容，確保維護的靈活性與效率。",
        projectLink: "https://communityspace.com.tw/",
        projectDate: "2024-02-06",
        projectHighLight: false,
        projectSkill: "Vue.js, Element UI, Swiper.js, HTML, CSS, Bootstrap, JavaScript, Fuse.js, AOS.js, fullPage.js",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: kiriProduct
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 8,
      attributes: {
        projectTitle: "翔翼通訊",
        projectDescription: "該網站使用 Vue 進行前端切版，包含靜態頁面、會員系統、產品頁、購物車系統等核心頁面。專案中的動態頁面 (會員、購物車) 以 mock data 先行開發，確保 UI/UX 設計與互動流暢度，後續可交由後端無縫銜接 API。",
        projectLink: "https://www.aerobile.com/",
        projectDate: "2025-02-05",
        projectHighLight: true,
        projectSkill: "Vue.js, Element Plus, Swiper.js, HTML, CSS, Bootstrap, JavaScript, AOS.js",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: aerobileProduct
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 9,
      attributes: {
        projectTitle: "大量傷病患救護管理系統",
        projectDescription: "該專案於三商電腦實習期間完成，負責開發消防署及相關消防單位的網頁儀表板。專案使用 DataTables 用於數據可視化、即時監控與資訊整合，提升消防單位的作業效率。經過允許，對外開放版本採用 Mock Data 進行展示。",
        projectLink: "https://neilchen.dev/mcidemo/index.html",
        projectDate: "2023-04-20",
        projectHighLight: false,
        projectSkill: "HTML, CSS, JavaScript, DataTables.js",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: mcidemoProduct
              }
            }
          ]
        },
        createdAt: "2023-09-01T12:00:00Z",
        updatedAt: "2023-09-15T12:00:00Z",
        publishedAt: "2023-09-20T12:00:00Z"
      }
    },
    {
      id: 10,
      attributes: {
        projectTitle: "遠傳雲端醫療資訊系統",
        projectDescription: "以 Vue 3、TypeScript 與 Quasar Framework 開發的雲端醫療資訊系統，涵蓋掛號、看診、醫囑處方、醫師排班、藥品管理、檢驗及診所基本設定等醫療作業流程。主要負責既有功能維護與擴充、REST API 串接、表單與資料驗證、PWA Offline 功能，以及跨頁狀態與操作流程優化；並針對離線環境中的病患敏感資料實作 IndexedDB AES 加密儲存機制。",
        projectLink: "https://enterprise.fetnet.net/content/ebu/tw/solution/5g-innovation/innovation/5g-telemedicine/cloudHIS.html?WTshort_k=P-U5SOxX0XX1&WTchannel=WEB&CMP&gad_campaignid=21098300791&gbraid=0AAAAAC7ZfXCwmyHFDiIwRoh78hXK57SkC",
        projectDate: "2025-03-10",
        projectHighLight: true,
        projectSkill: "Vue 3、TypeScript、Quasar、Pinia、Vue Router、IndexedDB、PWA、SCSS",
        projectImg: {
          data: [
            {
              id: 1,
              attributes: {
                url: cloudHISProject
              }
            }
          ]
        },
        createdAt: "2026-08-20T09:00:00Z",
        updatedAt: "2026-08-20T09:00:00Z",
        publishedAt: "2026-08-20T09:00:00Z"
      }
    }
  ]

  function setProjects(data) {
    // 如果沒有有效的數據，則使用假資料
    ProjectsData.value = data.length > 0 ? data : mockData
    updateHighlightedProjects()
  }

  function updateHighlightedProjects() {
    const highlightedProjects = ProjectsData.value.filter(
      (project) => project.attributes.projectHighLight
    )

    if (highlightedProjects.length < 3) {
      const additionalProjects = ProjectsData.value
        .filter((project) => !project.attributes.projectHighLight)
        .sort(
          (a, b) =>
            new Date(b.attributes.createdAt).getTime() -
            new Date(a.attributes.createdAt).getTime()
        )
        .slice(0, 3 - highlightedProjects.length)

      ProjectsHighLight.value = [
        ...highlightedProjects.map((project) => project.attributes),
        ...additionalProjects.map((project) => project.attributes),
      ].sort(
        (a, b) =>
          new Date(b.projectDate).getTime() -
          new Date(a.projectDate).getTime()
      )
    } else {
      ProjectsHighLight.value = highlightedProjects
        .slice(0, 3)
        .map((project) => project.attributes)
        .sort(
          (a, b) =>
            new Date(b.projectDate).getTime() -
            new Date(a.projectDate).getTime()
        )
    }
  }

  return { ProjectsData, ProjectsHighLight, setProjects, mockData }
})
