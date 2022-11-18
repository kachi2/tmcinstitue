const questions = [
    // EFFECTIVE RISK REGISTERS AND ASSESSMENTS
    // Effective Risk Registers and Assessments v0.0
    {
        questionText: 'Every risk has 100% likelihood. True or false?',
        answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
        ],
    },
    {
        questionText: 'Risk management is responsibility of the?',
        answerOptions: [
            { answerText: 'Customer', isCorrect: false },
            { answerText: 'Investor', isCorrect: false },
            { answerText: 'Developer', isCorrect: false },
            { answerText: 'Project team', isCorrect: true },
            { answerText: 'Production team', isCorrect: false },

        ],
    },
    {

        questionText: 'Risk is expressed in terms of probability and impact?',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following technique will ensure that impact of risk will be less?',
        answerOptions: [
            { answerText: 'Risk avoidance technique', isCorrect: false },
            { answerText: 'Risk Mitigation technique', isCorrect: false },
            { answerText: 'Risk contingency technique', isCorrect: true },
            { answerText: 'All of the above', isCorrect: false },
        ],
    },
   {
      questionText: 'Risk management is an important part of a project management?',
      answerOptions: [
          { answerText: 'True', isCorrect: true },
          { answerText: 'False', isCorrect: false },
      ],
   },
   {
questionText: 'Which of the following processes has the Risk Register as the primary output?',
answerOptions: [
    { answerText: 'Perform Qualitative Risk Analysis', isCorrect: false },
    { answerText: 'Monitor and Control Risks', isCorrect: false },
    { answerText: 'Plan Risk Management', isCorrect: false },
    { answerText: 'Identify Risks', isCorrect: true },
],
  },
  {
questionText: `After conducting a SWOT Analysis, you have determined that a business deal is worth
pursuing. You are required to use Agile development practices. In your company, there
is no expertise in Agile development. Hence, you partner with another organization
that specializes in Agile development. This is an example of`,
answerOptions: [
    { answerText: 'Sharing a Positive Risk', isCorrect: true },
    { answerText: 'Mitigating a Negative Risk', isCorrect: false },
    { answerText: 'Exploiting a Positive Risk', isCorrect: false },
    { answerText: 'Accepting a Negative Risk', isCorrect: false },
],
  },
  {
questionText: 'During which stage of risk planning are risks prioritized based on probability and impact?',
answerOptions: [
    { answerText: 'Perform Qualitative Risk Analysis', isCorrect: true },
    { answerText: 'Monitor and Control Risks', isCorrect: false },
    { answerText: 'Plan Risk Management', isCorrect: false },
    { answerText: 'Identify Risks', isCorrect: false },
],
  },
  {
questionText: ' Jack is now documenting details of identified individual project risks in the risk register for his construction project. Which information should Jack NOT include in the risk?',
answerOptions: [
    { answerText: ' List of potential risk responses', isCorrect: false },
    { answerText: 'Potential risk owners', isCorrect: false },
    { answerText: 'List of identified risks', isCorrect: false },
    { answerText: 'Means for grouping individual project risk', isCorrect: true },
],

  },
  {
questionText: 'During the Identify Risks process, you’ve invited 18 participants for a brainstorming session. You’ve divided the participants into groups. For you to have an effective brainstorming session, what is the recommended size of each group ?',
answerOptions: [
    { answerText: '2', isCorrect: false },
    { answerText: '3', isCorrect: true },
    { answerText: '6', isCorrect: false },
    { answerText: '9', isCorrect: false },
],
  }
];

const questions2 = [
    // Cyber Security Risk Management
    {
        questionText: 'The terms "threat" and "risk" can be used interchangeably; for example, a "threat assessment" is the same as a "risk assessment',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],
          },

{
    questionText: 'The concept of "risk management" originated within the security profession',
    answerOptions: [
        { answerText: 'True', isCorrect: false },
        { answerText: 'False', isCorrect: true },
    ],
      },

{
    questionText: 'Because vulnerabilities are actually a characteristic of the organization or facility, they are',
    answerOptions: [
        { answerText: 'The risk factor over which the organization has the most control', isCorrect: false },
        { answerText: 'Impossible to accurately assess by an outside consultant', isCorrect: false },
        { answerText: 'The risk factor that is most expensive to correct', isCorrect: false },
        { answerText: 'The only risk factor that can be influenced by the organization', isCorrect: true },

    ],
      },

      {

questionText: 'According to "Primer on Security Risk Management" the primary categories of threats are',
answerOptions: [
    { answerText: 'Criminal, Intentional, Terrorist', isCorrect: false },
    { answerText: 'Intentional, Natural, Inadvertent', isCorrect: true },

],
  },
  {

    questionText: 'In order to effectively mitigate risks, a security professional should',
answerOptions: [
    { answerText: 'Limit their strategy to using proven security measures only', isCorrect: false },
    { answerText: 'Assess all possible threats to the organization', isCorrect: true },
    { answerText: 'Apply a protection strategy that employs a suite of solutions', isCorrect: false },
    { answerText: 'Ensure that management is aware of existing vulnerabilities', isCorrect: false },
],
  },
  {

questionText: 'Which one of the following is not one of the underlying concepts on which a risk mitigation strategy should be based',
answerOptions: [
    { answerText: 'The five avenues to address risk', isCorrect: false },
    { answerText: 'The "four D"s"', isCorrect: false },
    { answerText: 'Layered Security', isCorrect: false },
    { answerText: 'Quantitative analysis', isCorrect: true },
],

  },
  {

questionText: 'Risk management is a critical process that touches every aspect of organizational asset protection-and the activities of the professional protection officer',
answerOptions: [
    { answerText: 'True', isCorrect: true },
    { answerText: 'False', isCorrect: false },
],
  },
  {

questionText: 'Service providers should not base their core business model on risk management principles',
answerOptions: [
    { answerText: 'True', isCorrect: false },
    { answerText: 'False', isCorrect: true },
],
  },
  {

questionText: 'Procedures implemented to define the roles, responsibilities, policies, and administrative functions needed to manage the control environment',
answerOptions: [
    { answerText: 'Integrity', isCorrect: false },
    { answerText: 'Risk transfer', isCorrect: false },
    { answerText: 'Compensating controls', isCorrect: false },
    { answerText: 'Administrative controls', isCorrect: true },
],
  },
  {


    questionText: 'Controls that substitute for the loss of primary controls and mitigate risk down to an acceptable level.',
answerOptions: [
    { answerText: 'Compliance', isCorrect: false },
    { answerText: 'Compensating controls', isCorrect: true },
    { answerText: 'Corrective controls', isCorrect: false },
    { answerText: 'Preventive controls', isCorrect: false },
],

  }


];


const questions3 = [
    // Best Practices in Operational Risk Management
    {


        questionText: 'To understand operational risk, one should understand',
    answerOptions: [
        { answerText: 'Operational process, corporate environment and the affecting factors', isCorrect: true },
        { answerText: 'Operational process only', isCorrect: false },
        { answerText: 'The affecting factors and regulations only', isCorrect: false },
        { answerText: 'No need to understand others, it just needs to understand the operational risk', isCorrect: false },
    ],

      },
      {
        questionText: ' What are the affecting factors which influence operational activities as well as the Operational risk',
        answerOptions: [
            { answerText: 'Nature of the company', isCorrect: false },
            { answerText: 'Laws and regulations', isCorrect: false },
            { answerText: ' Stakeholder Value', isCorrect: false },
            { answerText: ' All the above three factors', isCorrect: true },
        ],

      },
      {
        questionText: ' Which of the following risk statement is categorized as operational risk',
        answerOptions: [
            { answerText: 'PEOPLE RISK', isCorrect: false },
            { answerText: 'SYSTEM RISK', isCorrect: false },
            { answerText: 'PROCESS RISK', isCorrect: false },
            { answerText: ' All the above three factors', isCorrect: true },
        ],

      },
      {
        questionText: 'When would Risk Management be involved in Operational Process?',
        answerOptions: [
            { answerText: 'At the beginning of execution process', isCorrect: false },
            { answerText: ' At the first strategic decision process', isCorrect: false },
            { answerText: ' At the first initial strategic plan', isCorrect: true },
            { answerText: ' During audit process and BOC meeting', isCorrect: false },
        ],

      },
      {
        questionText: 'To express Operational risk, below statement is FALSE.',
        answerOptions: [
            { answerText: 'They are defined in clear & specific sentence (not more than 10 words)', isCorrect: false },
            { answerText: ' Understandable for people with different background', isCorrect: false },
            { answerText: ' Verb Form', isCorrect: true },
            { answerText: 'Avoid specific technical terms/ jargon and avoid abbreviation', isCorrect: false },
        ],
      },
      {
        questionText: 'Which one/ones of the following statements is TRUE',
        answerOptions: [
            { answerText: 'To achieve goal setting, organization should define their goal achievement', isCorrect: true },
            { answerText: ' To set the strategy, organization should identify the risks', isCorrect: true },
            { answerText: 'To define the risks, organization should define the opportunity', isCorrect: true },
            { answerText: ' During setting up the strategy, organization should be focused on the opportunity exploitation, instead of risks identification', isCorrect: true },
        ],
      },
      {
        questionText: 'Which one of the following main Risk Management function statements is FALSE',
        answerOptions: [
            { answerText: ' Risk Management will provide a framework to assure that operational activities are consistently conducted under control', isCorrect: false },
            { answerText: 'Improve organizational learning', isCorrect: false },
            { answerText: 'Improve the process effectiveness of decision making, planning and prioritizing business or project activity', isCorrect: false },
            { answerText: 'Improve auditing process', isCorrect: true },
        ],
      },
      {
        questionText: 'Based on market best practice, which method provides foundation and framework for linking and integrating Operational risk to enterprise Risk Management.',
        answerOptions: [
            { answerText: 'ISO9001', isCorrect: false },
            { answerText: ' ISO31000', isCorrect: true },
            { answerText: 'ISO37000', isCorrect: false },
            { answerText: 'ISO26000', isCorrect: false },
        ],
      }

];

const questions4 = [
    // Best Practices in Managing Vendor Fraud Risk
    {
        questionText: 'Which of the following is not considered to be part of the internal control structure of a company',
        answerOptions: [
            { answerText: 'Ensure that assets are kept secure.', isCorrect: false },
            { answerText: 'Monitor operations of the organization to ensure maximum efficiency.', isCorrect: true },
            { answerText: 'Publish accurate financial statements on a regular basis.', isCorrect: false },
            { answerText: 'Ensure assets are properly used.', isCorrect: false },
        ],
      },
      {
        questionText: ' Which one of the following documents is not needed to process a payment to a vendor',
        answerOptions: [
            { answerText: 'vendor invoice', isCorrect: false },
            { answerText: 'packing slip', isCorrect: true },
            { answerText: 'check request', isCorrect: false },
            { answerText: 'purchase order', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the advantage of using technology in the internal control system',
        answerOptions: [
            { answerText: 'Passwords can be used to allow access by employees', isCorrect: true },
            { answerText: 'Any cash received does not need to be reconciled because the computer tracks all transactions', isCorrect: false },
            { answerText: 'Transactions are easily changed.', isCorrect: false },
            { answerText: ' Employees cannot steal because all cash transactions are recorded by the  computer/cash register.', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following assets require the strongest of internal controls?',
        answerOptions: [
            { answerText: 'inventory', isCorrect: false },
            { answerText: 'credit cards', isCorrect: false },
            { answerText: 'computer equipment', isCorrect: false },
            { answerText: 'cash', isCorrect: true },
        ],
      },
      {
        questionText: 'Procurement fraud occurs when there is deliberate deception within the procedure-to-pay process that results in some type of financial gain, or loss.',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],

      },
      {
        questionText: 'Forgery involves the making, altering, use, or possession of a false writing in order to commit a',
        answerOptions: [
            { answerText: 'Immorality', isCorrect: false },
            { answerText: 'Crime', isCorrect: false },
            { answerText: 'Fraud', isCorrect: true },
            { answerText: 'All of the above', isCorrect: false },
        ],

      },
      {
        questionText: 'Computer forensics has become increasingly essential for the successful investigation of procurement fraud and the effective prosecution of perpetrators committing such an offence.',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],
      },
      {
        questionText: 'Decentralized procurement means that purchasing is managed on headquarter level.',
        answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
        ],
      },
      {
        questionText: ' To source effectively, ______ teams need to understand their organization’s  needs.',
        answerOptions: [
            { answerText: 'Risk assessment', isCorrect: false },
            { answerText: 'Procurement', isCorrect: true },
            { answerText: 'Mitigation', isCorrect: false },
            { answerText: ' All of the above', isCorrect: false },


        ],

      },
      {
        questionText: 'The RFx process is conducted business-to-business (B2B) during the negotiation process and helps to manage expectations prior to purchase or procurement.',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],

      }

];
