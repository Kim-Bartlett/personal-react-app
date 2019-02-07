import { TechDataProps } from './../pages/Tech/container';

const techData: TechDataProps[] = [
  {
    label: 'Languages',
    data: [
      { name: 'C', iconType: 'language' },
      { name: 'C++', iconType: 'language' },
      { name: 'CSS', iconType: 'language', core: true },
      { name: 'Java', iconType: 'java', core: true },
      { name: 'Javascript', iconType: 'js', core: true },
      { name: 'HTML', iconType: 'language', core: true },
      { name: 'PL/SQL', iconType: 'db' },
      { name: 'PostgreSQL', iconType: 'db', core: true },
      { name: 'PHP', iconType: 'language' },
      { name: 'Python', iconType: 'python' },
      { name: 'SQL', iconType: 'db' },
      { name: 'Ruby', iconType: 'ruby', core: true },
      { name: 'VBScript', iconType: 'language' }
    ]
  },

  {
    label: 'Frameworks',
    data: [
      { name: 'Django', iconType: 'python' },
      { name: 'GWT', iconType: 'java' },
      { name: 'jQuery', iconType: 'js' },
      { name: 'JSS', iconType: 'js' },
      { name: 'React', iconType: 'js', core: true },
      { name: 'React Native', iconType: 'js' },
      { name: 'Ruby on Rails', iconType: 'ruby', core: true },
      { name: 'Spring', iconType: 'java' }
    ]
  },

  {
    label: 'Libraries',
    data: [
      { name: 'Bootstrap', iconType: 'react' },
      { name: 'CanCanCan', iconType: 'ruby', core: true },
      { name: 'Devise', iconType: 'ruby', core: true },
      { name: 'Enzyme', iconType: 'react', core: true },
      { name: 'eslint', iconType: 'js' },
      { name: 'Factory Bot', iconType: 'ruby' },
      { name: 'Faker', iconType: 'ruby' },
      { name: 'Font Awesome', iconType: 'react' },
      { name: 'Foreman', iconType: 'ruby' },
      { name: 'Interfax', iconType: 'api' },
      { name: 'JBuilder', iconType: 'ruby', core: true },
      { name: 'Jest', iconType: 'js', core: true },
      { name: 'Letter Opener', iconType: 'ruby' },
      { name: 'lodash', iconType: 'react', core: true },
      { name: 'Material UI', iconType: 'react', core: true },
      { name: 'Paranoia', iconType: 'ruby', core: true },
      { name: 'Pokitdok', iconType: 'api' },
      { name: 'PostGIS', iconType: 'db' },
      { name: 'Prettier', iconType: 'react', core: true },
      { name: 'React-Router', iconType: 'react' },
      { name: 'React-Select', iconType: 'react' },
      { name: 'Redux Form', iconType: 'react' },
      { name: 'Redux', iconType: 'react', core: true },
      { name: 'Rspec', iconType: 'ruby', core: true },
      { name: 'Rubocop', iconType: 'ruby', core: true },
      { name: 'SmartyStreets', iconType: 'api' },
      { name: 'Storybook', iconType: 'react' },
      { name: 'tslint', iconType: 'react', core: true },
      { name: 'Typescript', iconType: 'react', core: true },
      { name: 'webpacker', iconType: 'ruby' },
      { name: 'Wicked PDF', iconType: 'ruby' }
    ]
  },

  {
    label: 'Tools',
    data: [
      { name: 'Android Studio', iconType: 'language' },
      { name: 'Ant', iconType: 'infra' },
      { name: 'AWS: EC2', iconType: 'infra' },
      { name: 'AWS: S3', iconType: 'infra' },
      { name: 'AWS: RDS', iconType: 'db' },
      { name: 'Bitbucket', iconType: 'version_control' },
      { name: 'Bugzilla', iconType: 'manage' },
      { name: 'CircleCi', iconType: 'test' },
      { name: 'Docker', iconType: 'infra' },
      { name: 'Eclipse', iconType: 'language' },
      { name: 'Git', iconType: 'version_control', core: true },
      { name: 'Github', iconType: 'version_control', core: true },
      { name: 'Heroku', iconType: 'infra' },
      { name: 'Homebrew', iconType: 'package_manager' },
      { name: 'Jenkins', iconType: 'infra', core: true },
      { name: 'JIRA', iconType: 'manage', core: true },
      { name: 'JMeter', iconType: 'test' },
      { name: 'JProfiler', iconType: 'test' },
      { name: 'New Relic', iconType: 'test' },
      { name: 'npm', iconType: 'package_manager' },
      { name: 'Perforce', iconType: 'version_control' },
      { name: 'Postico', iconType: 'db' },
      { name: 'Postman', iconType: 'test' },
      { name: 'Selenium', iconType: 'test' },
      { name: 'Sidekiq', iconType: 'infra' },
      { name: 'Terraform', iconType: 'infra' },
      { name: 'Trello', iconType: 'manage', core: true },
      { name: 'VS Code', iconType: 'language', core: true },
      { name: 'XCode', iconType: 'language' },
      { name: 'Webpack', iconType: 'package_manager' },
      { name: 'Yarn', iconType: 'package_manager', core: true }
    ]
  },

  {
    label: 'Workflows',
    data: [
      { name: 'Agile', iconType: 'manage', core: true },
      { name: 'Continuous Delivery', iconType: 'infra', core: true },
      { name: 'Feature Driven Development', iconType: 'manage', core: true },
      { name: 'Gitflow', iconType: 'version_control', core: true },
      { name: 'KanBan', iconType: 'manage', core: true },
      { name: 'Scrum', iconType: 'manage' },
      { name: 'Test Driven Development', iconType: 'test', core: true },
      { name: 'Waterfall', iconType: 'manage' }
    ]
  }
];

export default techData;
