const THEME_QUERY = `themeGeneralSettings {
  commanComponentOption {
    technologieTitle
    technologieDescription
    strategyTitle
    shortDescription
    serviceTitle
    serviceDetailButtonTitle
    sShortTitle
    pTitle
    pButtonName {
      url
      title
      target
    }
    awardLogos {
      awardLogoImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    cTitle
    shortDescription
    clientLogos {
      clientLogoImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    faqTitle
    faqDescription
    faqContent {
      faqMetaTitle
      faqMetaDescription
    }
    marqueeContent {
      marqueeText
    }
    selectProject {
      ... on Project {
        id
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        title
        slug
      }
    }
    selectService {
      ... on Service {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              width
              height
            }
            altText
          }
        }
        content
        tags {
          nodes {
            name
          }
        }
        excerpt
      }
    }
    strategySection {
      straTitle
      straDescription
      straImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    technologiesLogos {
      technologieLogos {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    testimonialsMeta {
      testtimonialsName
      testtimonialsPosition
      testtimonialsTitle
      testimonialImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
  }


  themeOptions {
    headerLogo {
      altText
      sourceUrl
      mediaDetails {
        width
        height
      }
    }
    headerButtonName {
      target
      title
      url
    }
    footerPhoneNumber
    footerEmail
    footerCopyrightText
    footerAddress
    footerContactButton {
      target
      title
      url
    }
    mailBoxTitle
    selectPages {
      ... on Page {
        id
        title
        slug
      }
    }
    footerLogo {
      altText
      sourceUrl
      mediaDetails {
        width
        height
      }
      srcSet
    }
  }
}
primary: menuItems(where: {location: PRIMARY, parentId: "0"}) {
  nodes {
    id
    label
    childItems {
      nodes {
        id
        label
      }
    }
  }
}
footer1: menuItems(where: {location: FOOTER_MENU_1, parentId: "0"}) {
  nodes {
    id
    label
    childItems {
      nodes {
        id
        label
      }
    }
  }
}
footer2: menuItems(where: {location: FOOTER_MENU_2, parentId: "0"}) {
  nodes {
    id
    label
    childItems {
      nodes {
        id
        label
      }
    }
  }
}
`


const COMMAN_COMPONENT_DATA = `themeGeneralSettings {
  commanComponentOption {
    technologieTitle
    technologieDescription
    strategyTitle
    shortDescription
    serviceTitle
    serviceDetailButtonTitle
    sShortTitle
    pTitle
    pButtonName {
      url
      title
      target
    }
    awardLogos {
      awardLogoImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    cTitle
    shortDescription
    clientLogos {
      clientLogoImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    faqTitle
    faqDescription
    faqContent {
      faqMetaTitle
      faqMetaDescription
    }
    marqueeContent {
      marqueeText
    }
    selectProject {
      ... on Project {
        id
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        title
        slug
      }
    }
    selectService {
      ... on Service {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              width
              height
            }
            altText
          }
        }
        content
        tags {
          nodes {
            name
          }
        }
        excerpt
      }
    }
    strategySection {
      straTitle
      straDescription
      straImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    technologiesLogos {
      technologieLogos {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    testimonialsMeta {
      testtimonialsName
      testtimonialsPosition
      testtimonialsTitle
      testimonialImage {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
  }
}
`

export const GET_HOME_PAGE_DATA = {
  query: `query HomePageQuery($id: ID = "/") {
        page(id: $id, idType: URI) {
          homePageOptions {
            bannerImage {
              altText
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            bannerShortDescription
            bannerButton {
              target
              title
              url
            }
            bannerTitle
            bannerShortTitle
            serviceTitle
            sShortTitle
            serviceDetailButtonTitle
            selectService {
              ... on Service {
                id
                title
                slug
                featuredImage {
                  node {
                    sourceUrl
                    mediaDetails {
                      width
                      height
                    }
                    altText
                  }
                }
                content

                tags {
                  nodes {
                    name
                  }
                }
              }
            }
            marqueeContent {
              marqueeText
            }
            awardText
            awardImage {
              altText
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            awardLogos {
              awardLogoImage {
                altText
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
            }
            cTitle
            shortDescription
            clientLogos {
              clientLogoImage {
                altText
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
            }
            strategyTitle
            strategySection {
              straTitle
              straDescription
              straImage {
                altText
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
            }
            technologieTitle
            technologieDescription
            technologiesLogos {
              technologieLogos {
                altText
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
            }
            pTitle
            pButtonName {
              url
              title
              target
            }
            selectProject {
              ... on Project {
                id
                featuredImage {
                  node {
                    altText
                    sourceUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
                title
                slug
              }
            }
            testimonialsMeta {
              testtimonialsName
              testtimonialsPosition
              testtimonialsTitle
            }
            faqTitle
            faqDescription
            faqContent {
              faqMetaTitle
              faqMetaDescription
            }
            bTitle
            blogSectionButtonName {
              target
              title
              url
            }
            selectedBlogs {
              ... on Post {
                id
                content
                featuredImage {
                  node {
                    altText
                    sourceUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
                slug
                title
                date
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
            }
          }
        }
        ${THEME_QUERY}
      }`
}

export const GET_SERVICE_PAGE_DATA = {
  query: `query ServicePageQuery($id: ID = "/services") {
    page(id: $id, idType: URI) {
      servicePageOption {
        serviceTitle
        sShortTitle
        serviceDetailButtonTitle
        selectService {
          ... on Service {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  width
                  height
                }
                altText
              }
            }
            content
            tags {
              nodes {
                name
              }
            }
          }
        }
        marqueeContent {
          marqueeText
        }
        technologieTitle
        technologieDescription
        technologiesLogos {
          technologieLogos {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
      
    }
    ${THEME_QUERY}
  }`
}




export const GET_PROJECT_PAGE_DATA = {
  query: `query Project($id: ID = "/projects") {
    page(id: $id, idType: URI) {
      projectOptions {
        pEnterTopText
      }
    }
    projects {
      nodes {
        content
        slug
        title
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
      }
        ${THEME_QUERY}
      }`
}



export const GET_SERVIDE_DETAIL_PAGE_DATA = {
  query: `query ServiceDetailData($id: ID = "") {
    service(id: $id, idType: SLUG) {
      content
      title
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          mediaDetails {
            width
            height
          }
          sourceUrl
        }
      }
      serviceDetailOptions {
        smDetails {
          smdDescription
          smdTitle
        }
        selectProject {
          ... on Project {
            id
            featuredImage {
              node {
                altText
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
            }
            title
            slug
          }
        }
        pButtonName {
          target
          title
          url
        }
        pTitle
      }
    }
    ${THEME_QUERY}
  }`
}


export const GET_APPROACH_PAGE_DATA = {
  query: `{
    ${THEME_QUERY}
  }`
}

export const GET_ALL_SERVICE_SLUG = {
  query: `query getAllServiceSlug {
    services {
      nodes {
        slug
      }
    }
    ${THEME_QUERY}
  }`
}
export const GET_ALL_POST_SLUG = {
  query: `query getAllPostsSlug {
    posts {
      nodes {
        slug
      }
    }
    ${THEME_QUERY}
  }`
}
export const GET_ALL_PROJECT_SLUG = {
  query: `query getAllProjectSlug {
    projects {
      nodes {
        slug
      }
    }
    ${THEME_QUERY}
  }`
}


export const GET_ALL_POST = {
  query: `query BlogPageData($id: ID = "/blog") {
    page(id: $id, idType: URI) {
      blogPageOptions {
        bannerTitle
      }
    }
     posts(first: 9999) {
        nodes {
          content
          title
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
              databaseId
            }
          }
          date
        }
      }
      categories {
        nodes {
          databaseId
          name
          slug
        }
      }
      ${THEME_QUERY}
  }`
}



// export const GET_ALL_POST = {
//   query: `query getAllPosts {
//     posts(first: 9999) {
//       nodes {
//         content
//         title
//         slug
//         featuredImage {
//           node {
//             altText
//             sourceUrl
//           }
//         }
//         categories {
//           nodes {
//             name
//             slug
//             databaseId
//           }
//         }
//         date
//       }
//     }
//     categories {
//       nodes {
//         databaseId
//         name
//         slug
//       }
//     }
//     ${THEME_QUERY}
//   }`
// }





export const GET_POST_DETAIL_PAGE_DATA = {
  query: `query PostDetailData($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      title
      date
      categories {
        nodes {
          name
          slug
          databaseId
        }
      }
      featuredImage {
        node {
          altText
          mediaDetails {
            width
            height
          }
          sourceUrl
        }
      }
    }
    ${THEME_QUERY}
  }`
}
export const GET_PROJECT_DETAIL_PAGE_DATA = {
  query: `query ProjectDetailData($id: ID = "") {
    project(id: $id, idType: SLUG) {
      content
      title
      date
      featuredImage {
        node {
          altText
          mediaDetails {
            width
            height
          }
          sourceUrl
         
        }
      }
      projectDetailPageOptions {
        projectDetailImages {
          pdImage {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
    ${THEME_QUERY}
  }`
}
