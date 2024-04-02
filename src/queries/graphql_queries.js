const THEME_QUERY = `themeGeneralSettings {
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


export const GET_PROJECT_PAGE_DATA = {
  query: `query Project($id: ID = "") {
    page(id: $id, idType: URI) {
      projectOptions {
        testimonialsMeta {
          testtimonialsName
          testtimonialsPosition
          testtimonialsTitle
          tmImage {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
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
      }
    }
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