export type YearMonth = { year: number; month: number } // month is 1-12

export type Experience = {
  company: string
  role: string
  start: YearMonth
  end: YearMonth | null // null means "Present"
  location: string
  highlights: string[]
}

export const profile = {
  name: 'Sujith Antony',
  role: 'Technical Consultant',
  email: 'mail2say@gmail.com',
  phone: 'Available on request',
  location: 'Bengaluru, Karnataka, India',
  links: {
    linkedin: 'https://www.linkedin.com/in/sujithantony',
    github: 'https://github.com/sujit1406',
    email: 'mailto:mail2say@gmail.com',
  },
}

export const experiences: Experience[] = [
  {
    company: 'Mobily Infotech',
    role: 'Technical Consultant',
    start: { year: 2026, month: 2 },
    end: null,
    location: 'Bengaluru, Karnataka, India',
    highlights: [
      'Developed and hosted robust CI/CD pipeline for iOS and Android teams',
      'Leading iOS development team, mentoring junior developers, and conducting code reviews',
    ],
  },
  {
    company: 'Singlepoint Solutions',
    role: 'Senior Software Engineer',
    start: { year: 2024, month: 10 },
    end: { year: 2026, month: 2 },
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Leading iOS development for Signia hearing-aid app (SwiftUI, Combine, BLE)',
      'Mentoring 3 junior engineers, improving code coverage by 30%',
      'Automated CI/CD pipelines on AppCenter/Firebase',
      'Active in Scrum: sprint planning, reviews, retrospectives',
    ],
  },
  {
    company: 'ACL Digital',
    role: 'Principal Engineer',
    start: { year: 2023, month: 1 },
    end: { year: 2024, month: 9 },
    location: 'Bengaluru, Karnataka, India',
    highlights: [
      'Built JioXplor indoor navigation app with BLE beacons',
      'Reduced app load time by 25% with Ionic integration',
      'Implemented custom maps using OpenLayers',
      'Mentored peers on hybrid mobile performance & BLE integration',
    ],
  },
  {
    company: 'Mavenir',
    role: 'Senior Member Of Technical Staff II - R&D',
    start: { year: 2019, month: 8 },
    end: { year: 2022, month: 9 },
    location: 'Bengaluru Area, India',
    highlights: [
      'Co-developed Mavenir Connect - secure VoIP & messaging app',
      'Increased app stability, improving enterprise adoption',
      'Consistent on-time App Store & AppCenter releases',
    ],
  },
  {
    company: 'Harman Connected Services',
    role: 'Technical Lead Product Development',
    start: { year: 2017, month: 2 },
    end: { year: 2019, month: 7 },
    location: 'Bengaluru, Karnataka, India',
    highlights: [
      'Aha Radio integration for Maruti Suzuki & Audi Connect',
      'Spearheaded iOS CI/CD automation - days to hours',
      'Architectural diagrams and technical design',
    ],
  },
  {
    company: 'ACL Digital',
    role: 'Senior Software Engineer',
    start: { year: 2014, month: 12 },
    end: { year: 2017, month: 2 },
    location: 'Bengaluru Area, India',
    highlights: [
      'Delivered multiple iOS projects for enterprise customers',
      'Implemented unit testing & participated in Agile ceremonies',
      'Conducted code reviews and mentored junior developers',
    ],
  },
]

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export const currentYearMonth = (): YearMonth => {
  const now = new Date()
  return { year: now.getFullYear(), month: now.getMonth() + 1 }
}

export const formatPeriod = ({ start, end }: Experience) => {
  const startLabel = `${MONTH_NAMES[start.month - 1]} ${start.year}`
  const endLabel = end ? `${MONTH_NAMES[end.month - 1]} ${end.year}` : 'Present'
  return `${startLabel} - ${endLabel}`
}

// Counts calendar months inclusively (Feb–Nov = 10 months), matching
// the convention used on LinkedIn and in the original hand-written data.
export const formatDuration = ({ start, end }: Experience) => {
  const last = end ?? currentYearMonth()
  const totalMonths = Math.max(
    1,
    (last.year - start.year) * 12 + (last.month - start.month) + 1,
  )
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)

  return parts.join(' ')
}

export const careerStart: YearMonth = experiences.reduce(
  (earliest, exp) =>
    exp.start.year < earliest.year ||
    (exp.start.year === earliest.year && exp.start.month < earliest.month)
      ? exp.start
      : earliest,
  experiences[0].start,
)

// Derived from the earliest role so the headline cannot drift from the timeline.
export const getYearsOfExperience = (now: YearMonth = currentYearMonth()) => {
  const totalMonths = Math.max(
    1,
    (now.year - careerStart.year) * 12 + (now.month - careerStart.month) + 1,
  )
  return Math.floor(totalMonths / 12)
}
