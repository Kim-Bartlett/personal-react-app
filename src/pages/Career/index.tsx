import React from "react";

import { Grid, Grow } from "@material-ui/core";
import WorkHistoryCard from "../../components/WorkHistoryCard";

const workHistory = [
  {
    company: "Rivers Agile Solutions",
    description: [
      "Full-time consultant for Arcadia Healthcare Solutions on a small team to develop a referral management web application for a major healthcare network.",
      "Built an MVP from the ground up with Ruby on Rails, PostgreSQL, React and Typescript as our core technology stack. We are currently practicing a GitFlow / feature driven process to provide continuous deployment of new features every week.",
      "Some notable APIs and libraries that I’ve worked with: Pokitdok, SmartyStreets, PostGIS, Devise Token Auth, Rspec, Enzyme, Redux, Material UI"
    ],
    location: "Canonsburg, PA",
    startDate: "Jan 2018",
    title: "Software Engineer"
  },
  {
    company: "Superior Group",
    description: [
      "Performed contract work for General Dynamics: Mission Systems (Pittsburgh).",
      "Developed a JavaScript based frontend using React and Redux to create a convenient, clean interface for collaborating and visualizing workflows involved with map creation.",
      "Planned and executed large scale performance testing on Sitaware, a web-based platform used for collaborating information and map data in a tactical setting. Jmeter, Selenium, Windows Performance Monitor and SQL Server Management Studio were the primary tools used for this project. I also largely contributed to the final product of this project: a large report detailing the server capacity and capabilities on a large scale, as well as bottlenecks and problem areas to be improved on. I also played the role of Scrum Master on this project."
    ],
    endDate: "Aug 2017",
    location: "Pittsburgh, PA",
    startDate: "Nov 2016",
    title: "Software Engineer"
  },
  {
    company: "CA Technologies",
    description: [
      "Provided quality assurance for and became an expert in deploying and using CA SiteMinder, a web access management system with single sign-on.",
      "Replicated specific customer’s environments running CA SiteMinder in order to ensure smooth deployment of software and release of new updates."
    ],
    endDate: "Jan 2015",
    location: "Framingham, MA",
    startDate: "Jun 2014",
    title: "Associate Software Engineer"
  },
  {
    company: "General Dynamics C4 Systems | Viz",
    description: [
      "Contributed to several releases of the Command Post for the Future (CPOF), a Java-based desktop application built for the Army based around visualization of data used for tactical purposes. I designed and implemented features as well as solved a large number of bugs in the sustainment period. I was recognized several times for my quick, thorough debugging skills.",
      "Won an award in February 2013 for outstanding technical performance. Many of my analyses of and solutions to critical bugs ensured smooth releases of CPOF during the final stages of development and sustainment period.",
      "Developed a web application that remotely managed services involved in administering CPOF. This involved the use of GWT (Java and Javascript), CSS and HTML.",
      "Tested and debugged the interactions between large map data and CPOF at the Aberdeen, MD army base in order to prepare for a huge release."
    ],
    endDate: "Nov 2013",
    location: "Pittsburgh, PA",
    startDate: "May 2012",
    title: "Software Engineer"
  },
  {
    company: "Bechtel Marine Propulsion Corporation",
    description: [
      "Created an application to dynamically generate standard operating procedures for building servers. The tools used for this project were Oracle's Application Express and Business Intelligence Publisher using PL/SQL, HTML and JavaScript.",
      "Configured VMWare's vCenter Chargeback for virtual machine chargebacks in order to provide the server team with the tools to automatically calculate cost for virtual machines and charge annually through email for these servers.",
      "Helped to build, maintain and upgrade the servers used at the laboratory, including writing a Visual Basic Script to automate weekly server patching with WSUS."
    ],

    endDate: "May 2011",
    location: "West Mifflin, PA",
    startDate: "Aug 2011",
    title: "Distributed Computing Intern"
  }
];

class Career extends React.Component {
  render() {
    return (
      <div className="page-wrapper" style={{ paddingTop: "4%" }}>
        <Grid container alignItems="flex-start" justify="space-around">
          {workHistory.map(history => (
            <Grow in>
              <Grid item lg={2} md={8} xs={10}>
                <WorkHistoryCard
                  company={history.company}
                  description={history.description}
                  endDate={history.endDate}
                  key={"card" + history.company}
                  location={history.location}
                  startDate={history.startDate}
                  title={history.title}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Career;
