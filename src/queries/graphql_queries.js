const THEME_QUERY = `  themeGeneralSettings {
  themeOptions {
    headerLogo {
      altText
      sourceUrl
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
            }
            awardLogos {
              awardLogoImage {
                altText
                sourceUrl
              }
            }
            cTitle
            shortDescription
            clientLogos {
              clientLogoImage {
                altText
                sourceUrl
              }
            }
            strategyTitle
            strategySection {
              straTitle
              straDescription
              straImage {
                altText
                sourceUrl
              }
            }
            technologieTitle
            technologieDescription
            technologiesLogos {
              technologieLogos {
                altText
                sourceUrl
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