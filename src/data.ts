export interface Photo {
  id: string;
  url: string;
  title: string;
  location?: string;
  exif?: string;
  story?: string;
  projectId: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  photos: Photo[];
}

export const PROJECTS: Project[] = [
  {
    id: "Everest",
    title: "Camp de base de l'Everest",
    description: "",
    coverUrl: "/images/projects/Everest/znepal_cover.webp",
    photos: [
      {
        id: "everest-1",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-7.jpg",
        title: "Camp de base de l'Everest No. 01",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-2",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-14.jpg",
        title: "Camp de base de l'Everest No. 02",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-3",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-15.jpg",
        title: "Camp de base de l'Everest No. 03",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-4",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-18.jpg",
        title: "Camp de base de l'Everest No. 04",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-5",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-31.jpg",
        title: "Camp de base de l'Everest No. 05",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-6",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-35.jpg",
        title: "Camp de base de l'Everest No. 06",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-7",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-51.jpg",
        title: "Camp de base de l'Everest No. 07",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-8",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-53.jpg",
        title: "Camp de base de l'Everest No. 08",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-9",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-90.jpg",
        title: "Camp de base de l'Everest No. 09",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-10",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-97.jpg",
        title: "Camp de base de l'Everest No. 10",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-11",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-109.jpg",
        title: "Camp de base de l'Everest No. 11",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-12",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-130.jpg",
        title: "Camp de base de l'Everest No. 12",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-13",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-140.jpg",
        title: "Camp de base de l'Everest No. 13",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-14",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-157.jpg",
        title: "Camp de base de l'Everest No. 14",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-15",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-185.jpg",
        title: "Camp de base de l'Everest No. 15",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-16",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-188.jpg",
        title: "Camp de base de l'Everest No. 16",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-17",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-196.jpg",
        title: "Camp de base de l'Everest No. 17",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-18",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-206.jpg",
        title: "Camp de base de l'Everest No. 18",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-19",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-235.jpg",
        title: "Camp de base de l'Everest No. 19",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-20",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-263.jpg",
        title: "Camp de base de l'Everest No. 20",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-21",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-269.jpg",
        title: "Camp de base de l'Everest No. 21",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-22",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-286.jpg",
        title: "Camp de base de l'Everest No. 22",
        location: "Camp de base de l'Everest"
      },
      {
        id: "everest-23",
        projectId: "Everest",
        url: "/images/projects/Everest/201410_Nepal-295.jpg",
        title: "Camp de base de l'Everest No. 23",
        location: "Camp de base de l'Everest"
      }
    ]
  },
  {
    id: "Transat",
    title: "Transatlantique",
    description: "",
    coverUrl: "/images/projects/MSC ilona/msc_cover.webp",
    photos: [
      {
        id: "transat-1",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/1DSC_03231.jpg",
        title: "Transatlantique No. 01",
        location: "Transatlantique"
      },
      {
        id: "transat-2",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_00011.jpg",
        title: "Transatlantique No. 02",
        location: "Transatlantique"
      },
      {
        id: "transat-3",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0074.jpg",
        title: "Transatlantique No. 03",
        location: "Transatlantique"
      },
      {
        id: "transat-4",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0094.jpg",
        title: "Transatlantique No. 04",
        location: "Transatlantique"
      },
      {
        id: "transat-5",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0131.jpg",
        title: "Transatlantique No. 05",
        location: "Transatlantique"
      },
      {
        id: "transat-6",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0171.jpg",
        title: "Transatlantique No. 06",
        location: "Transatlantique"
      },
      {
        id: "transat-7",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0226.jpg",
        title: "Transatlantique No. 07",
        location: "Transatlantique"
      },
      {
        id: "transat-8",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0248.jpg",
        title: "Transatlantique No. 08",
        location: "Transatlantique"
      },
      {
        id: "transat-9",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0343.jpg",
        title: "Transatlantique No. 09",
        location: "Transatlantique"
      },
      {
        id: "transat-10",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0368.jpg",
        title: "Transatlantique No. 10",
        location: "Transatlantique"
      },
      {
        id: "transat-11",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_00401.jpg",
        title: "Transatlantique No. 11",
        location: "Transatlantique"
      },
      {
        id: "transat-12",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0415.jpg",
        title: "Transatlantique No. 12",
        location: "Transatlantique"
      },
      {
        id: "transat-13",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0488.jpg",
        title: "Transatlantique No. 13",
        location: "Transatlantique"
      },
      {
        id: "transat-14",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0514.jpg",
        title: "Transatlantique No. 14",
        location: "Transatlantique"
      },
      {
        id: "transat-15",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0538.jpg",
        title: "Transatlantique No. 15",
        location: "Transatlantique"
      },
      {
        id: "transat-16",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0591.jpg",
        title: "Transatlantique No. 16",
        location: "Transatlantique"
      },
      {
        id: "transat-17",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0614.jpg",
        title: "Transatlantique No. 17",
        location: "Transatlantique"
      },
      {
        id: "transat-18",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0615.jpg",
        title: "Transatlantique No. 18",
        location: "Transatlantique"
      },
      {
        id: "transat-19",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_00651.jpg",
        title: "Transatlantique No. 19",
        location: "Transatlantique"
      },
      {
        id: "transat-20",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0655.jpg",
        title: "Transatlantique No. 20",
        location: "Transatlantique"
      },
      {
        id: "transat-21",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0673.jpg",
        title: "Transatlantique No. 21",
        location: "Transatlantique"
      },
      {
        id: "transat-22",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0682.jpg",
        title: "Transatlantique No. 22",
        location: "Transatlantique"
      },
      {
        id: "transat-23",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0814.jpg",
        title: "Transatlantique No. 23",
        location: "Transatlantique"
      },
      {
        id: "transat-24",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0878.jpg",
        title: "Transatlantique No. 24",
        location: "Transatlantique"
      },
      {
        id: "transat-25",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0880.jpg",
        title: "Transatlantique No. 25",
        location: "Transatlantique"
      },
      {
        id: "transat-26",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0887.jpg",
        title: "Transatlantique No. 26",
        location: "Transatlantique"
      },
      {
        id: "transat-27",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_0957.jpg",
        title: "Transatlantique No. 27",
        location: "Transatlantique"
      },
      {
        id: "transat-28",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_01541.jpg",
        title: "Transatlantique No. 28",
        location: "Transatlantique"
      },
      {
        id: "transat-29",
        projectId: "Transat",
        url: "/images/projects/MSC ilona/DSC_03381.jpg",
        title: "Transatlantique No. 29",
        location: "Transatlantique"
      }
    ]
  },
  {
    id: "New-Yorkais",
    title: "New-Yorkais(e)s",
    description: "",
    coverUrl: "/images/projects/New-Yorkais/NYC_cover.jpg",
    photos: [
      {
        id: "newyorkais-1",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0062-copy.jpg",
        title: "New-Yorkais(e)s No. 01",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-2",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0063-copy.jpg",
        title: "New-Yorkais(e)s No. 02",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-3",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0066-copy.jpg",
        title: "New-Yorkais(e)s No. 03",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-4",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0068-copy.jpg",
        title: "New-Yorkais(e)s No. 04",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-5",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0072-copy.jpg",
        title: "New-Yorkais(e)s No. 05",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-6",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0075-copy.jpg",
        title: "New-Yorkais(e)s No. 06",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-7",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0083-copy.jpg",
        title: "New-Yorkais(e)s No. 07",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-8",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0106-copy.jpg",
        title: "New-Yorkais(e)s No. 08",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-9",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0114.jpg",
        title: "New-Yorkais(e)s No. 09",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-10",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0130-copy.jpg",
        title: "New-Yorkais(e)s No. 10",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-11",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0135-copy.jpg",
        title: "New-Yorkais(e)s No. 11",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-12",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0150-copy.jpg",
        title: "New-Yorkais(e)s No. 12",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-13",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0163-copy-copy.jpg",
        title: "New-Yorkais(e)s No. 13",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-14",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0217-copy.jpg",
        title: "New-Yorkais(e)s No. 14",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-15",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0223-copy.jpg",
        title: "New-Yorkais(e)s No. 15",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-16",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0241-copy.jpg",
        title: "New-Yorkais(e)s No. 16",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-17",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0263-copy.jpg",
        title: "New-Yorkais(e)s No. 17",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-18",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0267-copy.jpg",
        title: "New-Yorkais(e)s No. 18",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-19",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0330-copy.jpg",
        title: "New-Yorkais(e)s No. 19",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-20",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0371-copy.jpg",
        title: "New-Yorkais(e)s No. 20",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-21",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0436-copy.jpg",
        title: "New-Yorkais(e)s No. 21",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-22",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0442-copy.jpg",
        title: "New-Yorkais(e)s No. 22",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-23",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0444-copy.jpg",
        title: "New-Yorkais(e)s No. 23",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-24",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0477-copy.jpg",
        title: "New-Yorkais(e)s No. 24",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-25",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0490-copy.jpg",
        title: "New-Yorkais(e)s No. 25",
        location: "New-Yorkais(e)s"
      },
      {
        id: "newyorkais-26",
        projectId: "New-Yorkais",
        url: "/images/projects/New-Yorkais/DSC_0501-copy.jpg",
        title: "New-Yorkais(e)s No. 26",
        location: "New-Yorkais(e)s"
      }
    ]
  },
  {
    id: "RC",
    title: "Radio-Canada déserté",
    description: "À venir",
    coverUrl: "/images/projects/RC/RC_cover.webp",
    photos: [
      {
        id: "rc-1",
        projectId: "RC",
        url: "/images/projects/RC/1DSCF2601.jpg",
        title: "Radio-Canada déserté No. 01",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-2",
        projectId: "RC",
        url: "/images/projects/RC/2DSCF2521.jpg",
        title: "Radio-Canada déserté No. 02",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-3",
        projectId: "RC",
        url: "/images/projects/RC/3DSCF2339.jpg",
        title: "Radio-Canada déserté No. 03",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-4",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2330.jpg",
        title: "Radio-Canada déserté No. 04",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-5",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2608.jpg",
        title: "Radio-Canada déserté No. 05",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-6",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2611.jpg",
        title: "Radio-Canada déserté No. 06",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-7",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2612.jpg",
        title: "Radio-Canada déserté No. 07",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-8",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2615.jpg",
        title: "Radio-Canada déserté No. 08",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-9",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2616.jpg",
        title: "Radio-Canada déserté No. 09",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-10",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2619.jpg",
        title: "Radio-Canada déserté No. 10",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-11",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2620.jpg",
        title: "Radio-Canada déserté No. 11",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-12",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2623.jpg",
        title: "Radio-Canada déserté No. 12",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-13",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2624.jpg",
        title: "Radio-Canada déserté No. 13",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-14",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2627.jpg",
        title: "Radio-Canada déserté No. 14",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-15",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2628.jpg",
        title: "Radio-Canada déserté No. 15",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-16",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2631.jpg",
        title: "Radio-Canada déserté No. 16",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-17",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2632.jpg",
        title: "Radio-Canada déserté No. 17",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-18",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2636.jpg",
        title: "Radio-Canada déserté No. 18",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-19",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2637.jpg",
        title: "Radio-Canada déserté No. 19",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-20",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2640.jpg",
        title: "Radio-Canada déserté No. 20",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-21",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2641.jpg",
        title: "Radio-Canada déserté No. 21",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-22",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2644.jpg",
        title: "Radio-Canada déserté No. 22",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-23",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2645.jpg",
        title: "Radio-Canada déserté No. 23",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-24",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2648.jpg",
        title: "Radio-Canada déserté No. 24",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-25",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2649.jpg",
        title: "Radio-Canada déserté No. 25",
        location: "Radio-Canada déserté"
      },
      {
        id: "rc-26",
        projectId: "RC",
        url: "/images/projects/RC/DSCF2653.jpg",
        title: "Radio-Canada déserté No. 26",
        location: "Radio-Canada déserté"
      }
    ]
  },
  {
    id: "Coins de rue",
    title: "Coins de rue - Buenos Aires",
    description: "",
    coverUrl: "/images/projects/Buenos Aires/zDSC_0361_cover.webp",
    photos: [
      {
        id: "coinsderue-1",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/1DSC_0361.jpg",
        title: "Coins de rue - Buenos Aires No. 01",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-2",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0323.jpg",
        title: "Coins de rue - Buenos Aires No. 02",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-3",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0330.jpg",
        title: "Coins de rue - Buenos Aires No. 03",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-4",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0334.jpg",
        title: "Coins de rue - Buenos Aires No. 04",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-5",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0338.jpg",
        title: "Coins de rue - Buenos Aires No. 05",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-6",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0339.jpg",
        title: "Coins de rue - Buenos Aires No. 06",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-7",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0340.jpg",
        title: "Coins de rue - Buenos Aires No. 07",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-8",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0342.jpg",
        title: "Coins de rue - Buenos Aires No. 08",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-9",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0346.jpg",
        title: "Coins de rue - Buenos Aires No. 09",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-10",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0347.jpg",
        title: "Coins de rue - Buenos Aires No. 10",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-11",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0349.jpg",
        title: "Coins de rue - Buenos Aires No. 11",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-12",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0351.jpg",
        title: "Coins de rue - Buenos Aires No. 12",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-13",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0353.jpg",
        title: "Coins de rue - Buenos Aires No. 13",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-14",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0362.jpg",
        title: "Coins de rue - Buenos Aires No. 14",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-15",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0366.jpg",
        title: "Coins de rue - Buenos Aires No. 15",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-16",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0370.jpg",
        title: "Coins de rue - Buenos Aires No. 16",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-17",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0371.jpg",
        title: "Coins de rue - Buenos Aires No. 17",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-18",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0386.jpg",
        title: "Coins de rue - Buenos Aires No. 18",
        location: "Coins de rue"
      },
      {
        id: "coinsderue-19",
        projectId: "Coins de rue",
        url: "/images/projects/Buenos Aires/DSC_0400.jpg",
        title: "Coins de rue - Buenos Aires No. 19",
        location: "Coins de rue"
      }
    ]
  },
  {
    id: "Jordanie",
    title: "Jordanie",
    description: "",
    coverUrl: "/images/projects/Jordanie/jordanie_cover.webp",
    photos: [
      {
        id: "jordanie-1",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/1DSC_0438.jpg",
        title: "Jordanie No. 01",
        location: "Jordanie"
      },
      {
        id: "jordanie-2",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/2DSC_0126.jpg",
        title: "Jordanie No. 02",
        location: "Jordanie"
      },
      {
        id: "jordanie-3",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/3DSC_0098.jpg",
        title: "Jordanie No. 03",
        location: "Jordanie"
      },
      {
        id: "jordanie-4",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/DSC_0028.jpg",
        title: "Jordanie No. 04",
        location: "Jordanie"
      },
      {
        id: "jordanie-5",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/DSC_0092.jpg",
        title: "Jordanie No. 05",
        location: "Jordanie"
      },
      {
        id: "jordanie-6",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/DSC_0137.jpg",
        title: "Jordanie No. 06",
        location: "Jordanie"
      },
      {
        id: "jordanie-7",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/DSC_0159.jpg",
        title: "Jordanie No. 07",
        location: "Jordanie"
      },
      {
        id: "jordanie-8",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/DSC_0179.jpg",
        title: "Jordanie No. 08",
        location: "Jordanie"
      },
      {
        id: "jordanie-9",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/DSC_00721.jpg",
        title: "Jordanie No. 09",
        location: "Jordanie"
      },
      {
        id: "jordanie-10",
        projectId: "Jordanie",
        url: "/images/projects/Jordanie/eDSC_0110.jpg",
        title: "Jordanie No. 10",
        location: "Jordanie"
      }
    ]
  },
  {
    id: "Syrie",
    title: "Syrie",
    description: "",
    coverUrl: "/images/projects/Syrie/syrie_cover.webp",
    photos: [
      {
        id: "syrie-1",
        projectId: "Syrie",
        url: "/images/projects/Syrie/09850002.jpg",
        title: "Syrie No. 01",
        location: "Syrie"
      },
      {
        id: "syrie-2",
        projectId: "Syrie",
        url: "/images/projects/Syrie/09850003.jpg",
        title: "Syrie No. 02",
        location: "Syrie"
      },
      {
        id: "syrie-3",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0141.jpg",
        title: "Syrie No. 03",
        location: "Syrie"
      },
      {
        id: "syrie-4",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0152.jpg",
        title: "Syrie No. 04",
        location: "Syrie"
      },
      {
        id: "syrie-5",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0186.jpg",
        title: "Syrie No. 05",
        location: "Syrie"
      },
      {
        id: "syrie-6",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0187.jpg",
        title: "Syrie No. 06",
        location: "Syrie"
      },
      {
        id: "syrie-7",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0194.jpg",
        title: "Syrie No. 07",
        location: "Syrie"
      },
      {
        id: "syrie-8",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0225.jpg",
        title: "Syrie No. 08",
        location: "Syrie"
      },
      {
        id: "syrie-9",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0256.jpg",
        title: "Syrie No. 09",
        location: "Syrie"
      },
      {
        id: "syrie-10",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0263.jpg",
        title: "Syrie No. 10",
        location: "Syrie"
      },
      {
        id: "syrie-11",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0277.jpg",
        title: "Syrie No. 11",
        location: "Syrie"
      },
      {
        id: "syrie-12",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0286.jpg",
        title: "Syrie No. 12",
        location: "Syrie"
      },
      {
        id: "syrie-13",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0324.jpg",
        title: "Syrie No. 13",
        location: "Syrie"
      },
      {
        id: "syrie-14",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0336.jpg",
        title: "Syrie No. 14",
        location: "Syrie"
      },
      {
        id: "syrie-15",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0356.jpg",
        title: "Syrie No. 15",
        location: "Syrie"
      },
      {
        id: "syrie-16",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0393.jpg",
        title: "Syrie No. 16",
        location: "Syrie"
      },
      {
        id: "syrie-17",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0408.jpg",
        title: "Syrie No. 17",
        location: "Syrie"
      },
      {
        id: "syrie-18",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0423.jpg",
        title: "Syrie No. 18",
        location: "Syrie"
      },
      {
        id: "syrie-19",
        projectId: "Syrie",
        url: "/images/projects/Syrie/DSC_0428.jpg",
        title: "Syrie No. 19",
        location: "Syrie"
      }
    ]
  },
  {
    id: "Jerusalem",
    title: "Jérusalem",
    description: "",
    coverUrl: "/images/projects/Jerusalem/Jerusalem_cover.webp",
    photos: [
      {
        id: "jerusalem-1",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/08130012.jpg",
        title: "Jérusalem No. 01",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-2",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_0231.jpg",
        title: "Jérusalem No. 02",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-3",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_0297.jpg",
        title: "Jérusalem No. 03",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-4",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_0309.jpg",
        title: "Jérusalem No. 04",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-5",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_0327.jpg",
        title: "Jérusalem No. 05",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-6",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_0330.jpg",
        title: "Jérusalem No. 06",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-7",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_0336.jpg",
        title: "Jérusalem No. 07",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-8",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_0344.jpg",
        title: "Jérusalem No. 08",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-9",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_02131.jpg",
        title: "Jérusalem No. 09",
        location: "Jérusalem"
      },
      {
        id: "jerusalem-10",
        projectId: "Jerusalem",
        url: "/images/projects/Jerusalem/DSC_02451.jpg",
        title: "Jérusalem No. 10",
        location: "Jérusalem"
      }
    ]
  },
  {
    id: "Liban",
    title: "Liban",
    description: "",
    coverUrl: "/images/projects/Liban/liban cover.webp",
    photos: [
      {
        id: "liban-1",
        projectId: "Liban",
        url: "/images/projects/Liban/1DSC_0254.jpg",
        title: "Liban No. 01",
        location: "Liban"
      },
      {
        id: "liban-2",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0029.jpg",
        title: "Liban No. 02",
        location: "Liban"
      },
      {
        id: "liban-3",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0053.jpg",
        title: "Liban No. 03",
        location: "Liban"
      },
      {
        id: "liban-4",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0065.jpg",
        title: "Liban No. 04",
        location: "Liban"
      },
      {
        id: "liban-5",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0068.jpg",
        title: "Liban No. 05",
        location: "Liban"
      },
      {
        id: "liban-6",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0102.jpg",
        title: "Liban No. 06",
        location: "Liban"
      },
      {
        id: "liban-7",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0103.jpg",
        title: "Liban No. 07",
        location: "Liban"
      },
      {
        id: "liban-8",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0111.jpg",
        title: "Liban No. 08",
        location: "Liban"
      },
      {
        id: "liban-9",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0126.jpg",
        title: "Liban No. 09",
        location: "Liban"
      },
      {
        id: "liban-10",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0127.jpg",
        title: "Liban No. 10",
        location: "Liban"
      },
      {
        id: "liban-11",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0148.jpg",
        title: "Liban No. 11",
        location: "Liban"
      },
      {
        id: "liban-12",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0157.jpg",
        title: "Liban No. 12",
        location: "Liban"
      },
      {
        id: "liban-13",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0184.jpg",
        title: "Liban No. 13",
        location: "Liban"
      },
      {
        id: "liban-14",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0185.jpg",
        title: "Liban No. 14",
        location: "Liban"
      },
      {
        id: "liban-15",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0190.jpg",
        title: "Liban No. 15",
        location: "Liban"
      },
      {
        id: "liban-16",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0192.jpg",
        title: "Liban No. 16",
        location: "Liban"
      },
      {
        id: "liban-17",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0212.jpg",
        title: "Liban No. 17",
        location: "Liban"
      },
      {
        id: "liban-18",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0219.jpg",
        title: "Liban No. 18",
        location: "Liban"
      },
      {
        id: "liban-19",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0235.jpg",
        title: "Liban No. 19",
        location: "Liban"
      },
      {
        id: "liban-20",
        projectId: "Liban",
        url: "/images/projects/Liban/DSC_0261.jpg",
        title: "Liban No. 20",
        location: "Liban"
      }
    ]
  },
  {
    id: "Inde du nord",
    title: "Inde du nord",
    description: "",
    coverUrl: "/images/projects/Inde/inde_cover.webp",
    photos: [
      {
        id: "indedunord-1",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/09880023.jpg",
        title: "Inde du nord No. 01",
        location: "Inde du nord"
      },
      {
        id: "indedunord-2",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0013.jpg",
        title: "Inde du nord No. 02",
        location: "Inde du nord"
      },
      {
        id: "indedunord-3",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0019.jpg",
        title: "Inde du nord No. 03",
        location: "Inde du nord"
      },
      {
        id: "indedunord-4",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0062.jpg",
        title: "Inde du nord No. 04",
        location: "Inde du nord"
      },
      {
        id: "indedunord-5",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0072.jpg",
        title: "Inde du nord No. 05",
        location: "Inde du nord"
      },
      {
        id: "indedunord-6",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0080.jpg",
        title: "Inde du nord No. 06",
        location: "Inde du nord"
      },
      {
        id: "indedunord-7",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0096.jpg",
        title: "Inde du nord No. 07",
        location: "Inde du nord"
      },
      {
        id: "indedunord-8",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0104.jpg",
        title: "Inde du nord No. 08",
        location: "Inde du nord"
      },
      {
        id: "indedunord-9",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0116.jpg",
        title: "Inde du nord No. 09",
        location: "Inde du nord"
      },
      {
        id: "indedunord-10",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0120.jpg",
        title: "Inde du nord No. 10",
        location: "Inde du nord"
      },
      {
        id: "indedunord-11",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0145.jpg",
        title: "Inde du nord No. 11",
        location: "Inde du nord"
      },
      {
        id: "indedunord-12",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0156.jpg",
        title: "Inde du nord No. 12",
        location: "Inde du nord"
      },
      {
        id: "indedunord-13",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0204.jpg",
        title: "Inde du nord No. 13",
        location: "Inde du nord"
      },
      {
        id: "indedunord-14",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0205.jpg",
        title: "Inde du nord No. 14",
        location: "Inde du nord"
      },
      {
        id: "indedunord-15",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0213.jpg",
        title: "Inde du nord No. 15",
        location: "Inde du nord"
      },
      {
        id: "indedunord-16",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0242.jpg",
        title: "Inde du nord No. 16",
        location: "Inde du nord"
      },
      {
        id: "indedunord-17",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0245.jpg",
        title: "Inde du nord No. 17",
        location: "Inde du nord"
      },
      {
        id: "indedunord-18",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0253.jpg",
        title: "Inde du nord No. 18",
        location: "Inde du nord"
      },
      {
        id: "indedunord-19",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0313.jpg",
        title: "Inde du nord No. 19",
        location: "Inde du nord"
      },
      {
        id: "indedunord-20",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0329.jpg",
        title: "Inde du nord No. 20",
        location: "Inde du nord"
      },
      {
        id: "indedunord-21",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0338.jpg",
        title: "Inde du nord No. 21",
        location: "Inde du nord"
      },
      {
        id: "indedunord-22",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0413.jpg",
        title: "Inde du nord No. 22",
        location: "Inde du nord"
      },
      {
        id: "indedunord-23",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0422.jpg",
        title: "Inde du nord No. 23",
        location: "Inde du nord"
      },
      {
        id: "indedunord-24",
        projectId: "Inde du nord",
        url: "/images/projects/Inde/DSC_0447.jpg",
        title: "Inde du nord No. 24",
        location: "Inde du nord"
      }
    ]
  },
  {
    id: "Ouest americain",
    title: "Ouest américain",
    description: "",
    coverUrl: "/images/projects/Ouest americain/ouest_cover.webp",
    photos: [
      {
        id: "ouestamericain-1",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/1F1030015.jpg",
        title: "Ouest américain No. 01",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-2",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1020007.jpg",
        title: "Ouest américain No. 02",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-3",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1020013.jpg",
        title: "Ouest américain No. 03",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-4",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1030001.jpg",
        title: "Ouest américain No. 04",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-5",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1030007.jpg",
        title: "Ouest américain No. 05",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-6",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1030010.jpg",
        title: "Ouest américain No. 06",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-7",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1030014.jpg",
        title: "Ouest américain No. 07",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-8",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1030022.jpg",
        title: "Ouest américain No. 08",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-9",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1030029.jpg",
        title: "Ouest américain No. 09",
        location: "Ouest américain"
      },
      {
        id: "ouestamericain-10",
        projectId: "Ouest americain",
        url: "/images/projects/Ouest americain/F1040016.jpg",
        title: "Ouest américain No. 10",
        location: "Ouest américain"
      }
    ]
  },
  {
    id: "printemps erable",
    title: "Printemps érable",
    description: "",
    coverUrl: "/images/projects/printemps erable/erable_cover.webp",
    photos: [
      {
        id: "printempserable-1",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_0001.jpg",
        title: "Printemps érable No. 01",
        location: "Printemps érable"
      },
      {
        id: "printempserable-2",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_0021.jpg",
        title: "Printemps érable No. 02",
        location: "Printemps érable"
      },
      {
        id: "printempserable-3",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_0025.jpg",
        title: "Printemps érable No. 03",
        location: "Printemps érable"
      },
      {
        id: "printempserable-4",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_0026.jpg",
        title: "Printemps érable No. 04",
        location: "Printemps érable"
      },
      {
        id: "printempserable-5",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_0028.jpg",
        title: "Printemps érable No. 05",
        location: "Printemps érable"
      },
      {
        id: "printempserable-6",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_0049.jpg",
        title: "Printemps érable No. 06",
        location: "Printemps érable"
      },
      {
        id: "printempserable-7",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_00071.jpg",
        title: "Printemps érable No. 07",
        location: "Printemps érable"
      },
      {
        id: "printempserable-8",
        projectId: "printemps erable",
        url: "/images/projects/printemps erable/DSC_00151.jpg",
        title: "Printemps érable No. 08",
        location: "Printemps érable"
      }
    ]
  },
  {
    id: "Montreal",
    title: "Montréal - Cross process",
    description: "",
    coverUrl: "/images/projects/Montreal/mtl_cover.webp",
    photos: [
      {
        id: "montreal-1",
        projectId: "Montreal",
        url: "/images/projects/Montreal/08130019-e1370490684885.jpg",
        title: "Montréal - Cross process No. 01",
        location: "Montréal"
      },
      {
        id: "montreal-2",
        projectId: "Montreal",
        url: "/images/projects/Montreal/F1000007.jpg",
        title: "Montréal - Cross process No. 02",
        location: "Montréal"
      },
      {
        id: "montreal-3",
        projectId: "Montreal",
        url: "/images/projects/Montreal/F1000013.jpg",
        title: "Montréal - Cross process No. 03",
        location: "Montréal"
      },
      {
        id: "montreal-4",
        projectId: "Montreal",
        url: "/images/projects/Montreal/F1000035.jpg",
        title: "Montréal - Cross process No. 04",
        location: "Montréal"
      },
      {
        id: "montreal-5",
        projectId: "Montreal",
        url: "/images/projects/Montreal/F1000037.jpg",
        title: "Montréal - Cross process No. 05",
        location: "Montréal"
      }
    ]
  },
  {
    id: "Échangeur Turcot",
    title: "Échangeur Turcot",
    description: "",
    coverUrl: "/images/projects/Echangeur Turcot/zF1010013_cover.webp",
    photos: [
      {
        id: "changeurturcot-1",
        projectId: "Échangeur Turcot",
        url: "/images/projects/Echangeur Turcot/1F1010013.jpg",
        title: "Échangeur Turcot No. 01",
        location: "Échangeur Turcot"
      },
      {
        id: "changeurturcot-2",
        projectId: "Échangeur Turcot",
        url: "/images/projects/Echangeur Turcot/2F1010015.jpg",
        title: "Échangeur Turcot No. 02",
        location: "Échangeur Turcot"
      },
      {
        id: "changeurturcot-3",
        projectId: "Échangeur Turcot",
        url: "/images/projects/Echangeur Turcot/3F1010019.jpg",
        title: "Échangeur Turcot No. 03",
        location: "Échangeur Turcot"
      },
      {
        id: "changeurturcot-4",
        projectId: "Échangeur Turcot",
        url: "/images/projects/Echangeur Turcot/4F1010010.jpg",
        title: "Échangeur Turcot No. 04",
        location: "Échangeur Turcot"
      },
      {
        id: "changeurturcot-5",
        projectId: "Échangeur Turcot",
        url: "/images/projects/Echangeur Turcot/5F1010001.jpg",
        title: "Échangeur Turcot No. 05",
        location: "Échangeur Turcot"
      },
      {
        id: "changeurturcot-6",
        projectId: "Échangeur Turcot",
        url: "/images/projects/Echangeur Turcot/6F1010012.jpg",
        title: "Échangeur Turcot No. 06",
        location: "Échangeur Turcot"
      }
    ]
  },
  {
    id: "Cambodge",
    title: "Cambodge",
    description: "",
    coverUrl: "/images/projects/Cambodge/zF1020008_cover.webp",
    photos: [
      {
        id: "cambodge-1",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1020008.jpg",
        title: "Cambodge No. 01",
        location: "Cambodge"
      },
      {
        id: "cambodge-2",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1020015.jpg",
        title: "Cambodge No. 02",
        location: "Cambodge"
      },
      {
        id: "cambodge-3",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1060002.jpg",
        title: "Cambodge No. 03",
        location: "Cambodge"
      },
      {
        id: "cambodge-4",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1060003.jpg",
        title: "Cambodge No. 04",
        location: "Cambodge"
      },
      {
        id: "cambodge-5",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1060007.jpg",
        title: "Cambodge No. 05",
        location: "Cambodge"
      },
      {
        id: "cambodge-6",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1060013.jpg",
        title: "Cambodge No. 06",
        location: "Cambodge"
      },
      {
        id: "cambodge-7",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1060014.jpg",
        title: "Cambodge No. 07",
        location: "Cambodge"
      },
      {
        id: "cambodge-8",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1060018.jpg",
        title: "Cambodge No. 08",
        location: "Cambodge"
      },
      {
        id: "cambodge-9",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/F1060031.jpg",
        title: "Cambodge No. 09",
        location: "Cambodge"
      },
      {
        id: "cambodge-10",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/marchePP_PANO1.jpg",
        title: "Cambodge No. 10",
        location: "Cambodge"
      },
      {
        id: "cambodge-11",
        projectId: "Cambodge",
        url: "/images/projects/Cambodge/squatPANO.jpg",
        title: "Cambodge No. 11",
        location: "Cambodge"
      }
    ]
  },
  {
    id: "Big O",
    title: "Big O - Montréal",
    description: "Monument du skateboard, le Big O est un tube de béton construit en 1976 à Montréal et qui servait à l'origine de corridor d'entrée souterrain pour l'accès des athlètes au stade.",
    coverUrl: "/images/projects/Big O/DSC_0011_cover.jpg",
    photos: [
      {
        id: "bigo-1",
        projectId: "Big O",
        url: "/images/projects/Big O/1DSC_0006.jpg",
        title: "Big O - Montréal No. 01",
        location: "Big O"
      },
      {
        id: "bigo-2",
        projectId: "Big O",
        url: "/images/projects/Big O/2DSC_0027.jpg",
        title: "Big O - Montréal No. 02",
        location: "Big O"
      },
      {
        id: "bigo-3",
        projectId: "Big O",
        url: "/images/projects/Big O/3DSC_0040.jpg",
        title: "Big O - Montréal No. 03",
        location: "Big O"
      },
      {
        id: "bigo-4",
        projectId: "Big O",
        url: "/images/projects/Big O/4DSC_0098.jpg",
        title: "Big O - Montréal No. 04",
        location: "Big O"
      },
      {
        id: "bigo-5",
        projectId: "Big O",
        url: "/images/projects/Big O/5DSC_0066.jpg",
        title: "Big O - Montréal No. 05",
        location: "Big O"
      },
      {
        id: "bigo-6",
        projectId: "Big O",
        url: "/images/projects/Big O/6DSC_0079.jpg",
        title: "Big O - Montréal No. 06",
        location: "Big O"
      },
      {
        id: "bigo-7",
        projectId: "Big O",
        url: "/images/projects/Big O/7DSC_0012.jpg",
        title: "Big O - Montréal No. 07",
        location: "Big O"
      },
      {
        id: "bigo-8",
        projectId: "Big O",
        url: "/images/projects/Big O/8DSC_00491.jpg",
        title: "Big O - Montréal No. 08",
        location: "Big O"
      },
      {
        id: "bigo-9",
        projectId: "Big O",
        url: "/images/projects/Big O/9DSC_0011.jpg",
        title: "Big O - Montréal No. 09",
        location: "Big O"
      }
    ]
  },
  {
    id: "5pointz",
    title: "Five Pointz - New-York",
    description: "De 1991 jusqu'en 2013, FivePointz fut un lieu de renommée mondiale pour les graffeurs et les muralistes du monde entier. Aménagé dans un complexe d'anciennes usines industrielles de près de 18 500 mètres carrés, le site a été détruit en 2013 et remplacé par un complexe résidentiel de luxe. Ces photos gardent une trace d'un lieu important de la culture new-yorkaise.",
    coverUrl: "/images/projects/5 pointz/DSC_0113 - cover.jpg",
    photos: [
      {
        id: "5pointz-1",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/1DSC_0113.jpg",
        title: "Five Pointz - New-York No. 01",
        location: "Five Pointz"
      },
      {
        id: "5pointz-2",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/2DSC_0127.jpg",
        title: "Five Pointz - New-York No. 02",
        location: "Five Pointz"
      },
      {
        id: "5pointz-3",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/3DSC_0132.jpg",
        title: "Five Pointz - New-York No. 03",
        location: "Five Pointz"
      },
      {
        id: "5pointz-4",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/4DSC_0135.jpg",
        title: "Five Pointz - New-York No. 04",
        location: "Five Pointz"
      },
      {
        id: "5pointz-5",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/5DSC_0088.jpg",
        title: "Five Pointz - New-York No. 05",
        location: "Five Pointz"
      },
      {
        id: "5pointz-6",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/6DSC_0106.jpg",
        title: "Five Pointz - New-York No. 06",
        location: "Five Pointz"
      },
      {
        id: "5pointz-7",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/7DSC_0116.jpg",
        title: "Five Pointz - New-York No. 07",
        location: "Five Pointz"
      },
      {
        id: "5pointz-8",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/8DSC_0139.jpg",
        title: "Five Pointz - New-York No. 08",
        location: "Five Pointz"
      },
      {
        id: "5pointz-9",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/9DSC_0154.jpg",
        title: "Five Pointz - New-York No. 09",
        location: "Five Pointz"
      },
      {
        id: "5pointz-10",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/10DSC_0166.jpg",
        title: "Five Pointz - New-York No. 10",
        location: "Five Pointz"
      },
      {
        id: "5pointz-11",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/10DSC_0233.jpg",
        title: "Five Pointz - New-York No. 11",
        location: "Five Pointz"
      },
      {
        id: "5pointz-12",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/11DSC_0144.jpg",
        title: "Five Pointz - New-York No. 12",
        location: "Five Pointz"
      },
      {
        id: "5pointz-13",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/12DSC_0155.jpg",
        title: "Five Pointz - New-York No. 13",
        location: "Five Pointz"
      },
      {
        id: "5pointz-14",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/13DSC_0159.jpg",
        title: "Five Pointz - New-York No. 14",
        location: "Five Pointz"
      },
      {
        id: "5pointz-15",
        projectId: "5pointz",
        url: "/images/projects/5 pointz/14_5pano.jpg",
        title: "Five Pointz - New-York No. 15",
        location: "Five Pointz"
      }
    ]
  }
];
