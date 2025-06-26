// Trust Signal Knowledge Graph Export  
// Complete Cypher script to recreate the knowledge graph

// \============================================================================  
// CORE GAME MECHANICS  
// \============================================================================

CREATE (game:Game {name: "Trust Signal", type: "Corporate Cybersecurity Awareness Game"})

// Simple Detection Challenge  
CREATE (sdc:GameMechanic {name: "Simple Detection Challenge", type: "Core Mechanic"})  
CREATE (binary:GameElement {name: "Binary Decision", type: "Decision System", description: "Trust or Signal choices"})  
CREATE (teams:GameElement {name: "Teams of 4-6", type: "Team Structure", description: "Review communications together"})  
CREATE (timing:GameElement {name: "30-60 seconds per scenario", type: "Time Constraint", description: "Maintains engagement"})  
CREATE (feedback:GameElement {name: "Immediate Feedback", type: "Learning Support", description: "Explanation of detection clues"})  
CREATE (difficulty:GameElement {name: "Progressive Difficulty", type: "Advancement System", description: "Increases 25% each session"})

// Scoring System  
CREATE (scoring:GameMechanic {name: "Scoring System", type: "Assessment Mechanic"})  
CREATE (correct:ScoreElement {name: "Correct Detection", type: "Positive Score", points: 2})  
CREATE (falsePos:ScoreElement {name: "False Positives", type: "Negative Score", points: \-1})  
CREATE (missed:ScoreElement {name: "Missing Threats", type: "Major Penalty", points: \-3})  
CREATE (bonus:ScoreElement {name: "Bonus Points", type: "Advanced Recognition", description: "For identifying specific AI artifacts"})

// Role Rotation  
CREATE (roleRot:GameMechanic {name: "Role Rotation", type: "Engagement Mechanic"})  
CREATE (employee:Role {name: "Employee", type: "Individual Role", focus: "Personal threat recognition"})  
CREATE (manager:Role {name: "Manager", type: "Leadership Role", focus: "Team member requests evaluation"})  
CREATE (itSupport:Role {name: "IT Support", type: "Technical Role", focus: "Technical analysis perspective"})  
CREATE (executive:Role {name: "Executive", type: "Decision Role", focus: "High-stakes decision making"})

// \============================================================================  
// SESSION DETAILS  
// \============================================================================

// Four-Session Progressive Structure  
CREATE (sessionStructure:GameMechanic {name: "Four-Session Progressive Structure", type: "Learning Progression"})

// Session 1: Foundation  
CREATE (session1:GameSession {  
  name: "Session 1: Foundation",  
  type: "Foundation Session",  
  duration: "1 hour",  
  learningObjective: "Recognize basic deepfake indicators"  
})

CREATE (s1\_welcome:SessionComponent {name: "Welcome \+ team formation", type: "Setup", duration: "5 min"})  
CREATE (s1\_overview:SessionComponent {name: "Threat landscape overview", type: "Education", duration: "10 min"})  
CREATE (s1\_game:SessionComponent {name: "Game rounds", type: "Practice", duration: "30 min", scenarios: 6})  
CREATE (s1\_debrief:SessionComponent {name: "Team debrief \+ ethics discussion", type: "Reflection", duration: "10 min"})  
CREATE (s1\_preview:SessionComponent {name: "Preview next session", type: "Preparation", duration: "5 min"})

// Session 1 Scenarios  
CREATE (s1\_scenario1:Scenario {name: "Obvious voice clone", type: "Voice Attack", difficulty: "Basic", description: "CEO with wrong accent/speech patterns"})  
CREATE (s1\_scenario2:Scenario {name: "Suspicious email", type: "Email Attack", difficulty: "Basic", description: "AI-generated with subtle grammar errors"})  
CREATE (s1\_scenario3:Scenario {name: "Authentic urgent request", type: "Legitimate Communication", difficulty: "Baseline", description: "Real executive communication for contrast"})  
CREATE (s1\_scenario4:Scenario {name: "Basic video deepfake", type: "Video Attack", difficulty: "Basic", description: "Face mapping with obvious artifacts"})  
CREATE (s1\_scenario5:Scenario {name: "Voice \+ email combination", type: "Multi-channel Attack", difficulty: "Intermediate", description: "Multi-channel but inconsistent details"})  
CREATE (s1\_scenario6:Scenario {name: "Pressure scenario", type: "Social Engineering", difficulty: "Intermediate", description: "Time-sensitive request with emotional manipulation"})

// Session 2: Escalation  
CREATE (session2:GameSession {  
  name: "Session 2: Escalation",  
  type: "Escalation Session",  
  duration: "1 hour",  
  learningObjective: "Handle multi-channel sophisticated attacks"  
})

// Session 2 Scenarios  
CREATE (s2\_scenario1:Scenario {name: "High-quality voice clone", type: "Advanced Voice Attack", difficulty: "Advanced", description: "CEO voice requesting wire transfer"})  
CREATE (s2\_scenario2:Scenario {name: "AI-enhanced BEC", type: "Business Email Compromise", difficulty: "Advanced", description: "Perfect grammar, personalized details from social media"})  
CREATE (s2\_scenario3:Scenario {name: "Deepfake video call", type: "Video Attack", difficulty: "Advanced", description: "Short clip claiming technical difficulties"})  
CREATE (s2\_scenario4:Scenario {name: "Coordinated attack", type: "Multi-channel Attack", difficulty: "Advanced", description: "Voice \+ email \+ text with consistent story"})  
CREATE (s2\_scenario5:Scenario {name: "Insider threat simulation", type: "Social Engineering", difficulty: "Advanced", description: "Colleague acting suspiciously"})  
CREATE (s2\_scenario6:Scenario {name: "Time pressure scenario", type: "Urgency Attack", difficulty: "Advanced", description: "Board meeting in 10 minutes urgency"})

// Session 3: Advanced  
CREATE (session3:GameSession {  
  name: "Session 3: Advanced",  
  type: "Advanced Session",  
  duration: "1 hour",  
  learningObjective: "Detect sophisticated AI-generated content and verify properly"  
})

// Session 3 Scenarios  
CREATE (s3\_scenario1:Scenario {name: "Perfect voice clone", type: "Expert Voice Attack", difficulty: "Expert", description: "Requires verification through secondary channels"})  
CREATE (s3\_scenario2:Scenario {name: "AI-generated documents", type: "Document Fraud", difficulty: "Expert", description: "Fake contracts, invoices with subtle inconsistencies"})  
CREATE (s3\_scenario3:Scenario {name: "Deepfake video meeting", type: "Video Meeting Attack", difficulty: "Expert", description: "Full conversation requiring behavioral analysis"})  
CREATE (s3\_scenario4:Scenario {name: "Advanced social engineering", type: "Long-term Attack", difficulty: "Expert", description: "Long-term relationship building attempt"})  
CREATE (s3\_scenario5:Scenario {name: "Supply chain compromise", type: "Vendor Attack", difficulty: "Expert", description: "Fake vendor communications"})  
CREATE (s3\_scenario6:Scenario {name: "Crisis exploitation", type: "Opportunistic Attack", difficulty: "Expert", description: "Using current events to create urgency"})

// Session 4: Mastery  
CREATE (session4:GameSession {  
  name: "Session 4: Mastery",  
  type: "Mastery Session",  
  duration: "1 hour",  
  learningObjective: "Coordinate team response to complex threats"  
})

CREATE (s4\_welcome:SessionComponent {name: "Welcome \+ final role assignments", type: "Setup", duration: "5 min"})  
CREATE (s4\_case:SessionComponent {name: "Real-world case study analysis", type: "Analysis", duration: "10 min"})  
CREATE (s4\_scenario:SessionComponent {name: "Complex team scenario", type: "Team Challenge", duration: "35 min"})  
CREATE (s4\_planning:SessionComponent {name: "Action planning", type: "Implementation", duration: "10 min"})

// Ethics Components  
CREATE (ethics1:EthicsComponent {name: "Verification vs Trust Discussion", type: "Ethics Module", session: "Session 1"})  
CREATE (ethics2:EthicsComponent {name: "Workplace Relationships Balance", type: "Ethics Module", session: "Session 2"})  
CREATE (ethics3:EthicsComponent {name: "Corporate AI Responsibility", type: "Ethics Module", session: "Session 3"})  
CREATE (ethics4:EthicsComponent {name: "Organizational AI Governance", type: "Ethics Module", session: "Session 4"})

// \============================================================================  
// IMPLEMENTATION DETAILS  
// \============================================================================

// CISO-Led Facilitation  
CREATE (cisoFacilitation:Implementation {  
  name: "CISO-Led Facilitation",  
  type: "Leadership Model"  
})

CREATE (preSession:FacilitationComponent {  
  name: "Pre-session",  
  type: "Preparation",  
  description: "Review threat intelligence and customize scenarios"  
})

CREATE (duringSession:FacilitationComponent {  
  name: "During session",  
  type: "Active Facilitation",  
  description: "Provide real-world context and policy guidance"  
})

CREATE (postSession:FacilitationComponent {  
  name: "Post-session",  
  type: "Follow-up",  
  description: "Track metrics and adjust future content"  
})

// Technology Requirements  
CREATE (techReqs:Implementation {  
  name: "Technology Requirements",  
  type: "Technical Infrastructure"  
})

CREATE (laptop:TechRequirement {  
  name: "Laptop/tablet per team",  
  type: "Hardware",  
  necessity: "Required"  
})

CREATE (audio:TechRequirement {  
  name: "Audio playback capability",  
  type: "Hardware",  
  necessity: "Required"  
})

CREATE (scoringApp:TechRequirement {  
  name: "Simple scoring app",  
  type: "Software",  
  necessity: "Preferred",  
  alternative: "Paper-based tracking"  
})

CREATE (timer:TechRequirement {  
  name: "Timer for scenarios",  
  type: "Software",  
  duration: "30-60 seconds"  
})

// Scenario Content Sources  
CREATE (contentSources:Implementation {  
  name: "Scenario Content Sources",  
  type: "Content Strategy"  
})

CREATE (realAttacks:ContentSource {  
  name: "Real attack vectors",  
  type: "Threat Intelligence",  
  description: "Adapted from current threat intelligence"  
})

CREATE (internalExamples:ContentSource {  
  name: "Anonymized internal examples",  
  type: "Organizational Experience",  
  requirement: "With permission"  
})

CREATE (industryThreats:ContentSource {  
  name: "Industry-specific threats",  
  type: "Sector Intelligence",  
  description: "Relevant to organization type"  
})

CREATE (complianceScenarios:ContentSource {  
  name: "Regulatory compliance scenarios",  
  type: "Ethics Training",  
  purpose: "Ethics module support"  
})

// Measurable Outcomes  
CREATE (measurableOutcomes:Implementation {  
  name: "Measurable Outcomes",  
  type: "Assessment Framework"  
})

CREATE (prePostAssess:MeasurementTool {  
  name: "Pre/post assessment",  
  type: "Knowledge Test",  
  metric: "Deepfake detection accuracy"  
})

CREATE (behavioralMetrics:MeasurementTool {  
  name: "Behavioral metrics",  
  type: "Behavior Tracking",  
  metric: "Verification protocol usage"  
})

CREATE (incidentReporting:MeasurementTool {  
  name: "Incident reporting",  
  type: "Activity Metric",  
  metric: "Increase in legitimate suspicious activity reports"  
})

CREATE (cultureIndicators:MeasurementTool {  
  name: "Culture indicators",  
  type: "Survey",  
  metric: "Team confidence in threat recognition"  
})

// Spaced Repetition Support  
CREATE (spacedRepetition:Implementation {  
  name: "Spaced Repetition Support",  
  type: "Retention Strategy"  
})

CREATE (monthlyMini:RepetitionComponent {  
  name: "Monthly mini-sessions",  
  type: "Micro-learning",  
  duration: "15 minutes",  
  content: "New scenarios"  
})

CREATE (quarterlyRefresh:RepetitionComponent {  
  name: "Quarterly refreshers",  
  type: "Update Session",  
  content: "Updated threat landscape"  
})

CREATE (annualFull:RepetitionComponent {  
  name: "Annual full program",  
  type: "Complete Review",  
  content: "Advanced scenarios"  
})

CREATE (realTimeAlerts:RepetitionComponent {  
  name: "Real-time alerts",  
  type: "Immediate Response",  
  trigger: "New attack types emerge"  
})

// \============================================================================  
// COMPETITIVE ADVANTAGES  
// \============================================================================

// Professional Focus  
CREATE (professionalFocus:CompetitiveAdvantage {  
  name: "Professional Focus",  
  type: "Market Differentiation"  
})

CREATE (workplaceScenarios:AdvantageComponent {  
  name: "Workplace-relevant scenarios",  
  type: "Content Strategy",  
  description: "Rather than abstract exercises"  
})

CREATE (realisticTimePressure:AdvantageComponent {  
  name: "Realistic time pressures",  
  type: "Simulation Accuracy",  
  description: "Matching actual work environments"  
})

CREATE (businessImpact:AdvantageComponent {  
  name: "Business impact context",  
  type: "Relevance Factor",  
  description: "For all scenarios"  
})

// Scalability  
CREATE (scalability:CompetitiveAdvantage {  
  name: "Scalability",  
  type: "Implementation Advantage"  
})

CREATE (facilitatorGuide:ScalabilityComponent {  
  name: "Facilitator guide",  
  type: "Implementation Tool",  
  benefit: "Enables CISO-led implementation"  
})

CREATE (modularContent:ScalabilityComponent {  
  name: "Modular content",  
  type: "Customization Feature",  
  benefit: "Allows customization by industry/role"  
})

CREATE (progressiveDifficultyAdv:ScalabilityComponent {  
  name: "Progressive difficulty",  
  type: "Adaptive Learning",  
  benefit: "Accommodates diverse skill levels"  
})

// Regulatory Alignment  
CREATE (regulatoryAlignment:CompetitiveAdvantage {  
  name: "Regulatory Alignment",  
  type: "Compliance Advantage"  
})

CREATE (builtInEthics:RegulatoryComponent {  
  name: "Built-in ethics training",  
  type: "Compliance Feature",  
  benefit: "Meets compliance requirements"  
})

CREATE (documentedOutcomes:RegulatoryComponent {  
  name: "Documented learning outcomes",  
  type: "Audit Support",  
  benefit: "Support audit needs"  
})

CREATE (policyIntegration:RegulatoryComponent {  
  name: "Policy integration",  
  type: "Governance Support",  
  benefit: "Helps organizations develop governance frameworks"  
})

// Balanced Design  
CREATE (balancedDesign:CompetitiveAdvantage {  
  name: "Balanced design for credibility and engagement",  
  type: "Design Philosophy"  
})

CREATE (credibilityFactor:DesignComponent {  
  name: "Professional credibility",  
  type: "Acceptance Factor",  
  description: "Respected by corporate audiences"  
})

CREATE (engagementFactor:DesignComponent {  
  name: "High engagement",  
  type: "Learning Factor",  
  description: "Maintains attention and participation"  
})

CREATE (behaviorChangeAdv:DesignComponent {  
  name: "Measurable cybersecurity awareness improvement",  
  type: "Outcome Factor",  
  description: "Demonstrable skill development"  
})

// \============================================================================  
// MEASURABLE OUTCOMES  
// \============================================================================

// Immediate (Session-Level) Outcomes  
CREATE (immediateOutcomes:SuccessMetric {  
  name: "Immediate (Session-Level)",  
  type: "Short-term Measurement",  
  timeframe: "Per session"  
})

CREATE (participation:Measurement {  
  name: "95%+ participation",  
  type: "Attendance Metric",  
  target: "95%",  
  scope: "Across all sessions"  
})

CREATE (detectionAccuracy:Measurement {  
  name: "85%+ detection accuracy",  
  type: "Performance Metric",  
  target: "85%",  
  milestone: "By Session 4"  
})

CREATE (consistentEngagement:Measurement {  
  name: "Consistent engagement",  
  type: "Participation Metric",  
  measurement: "Active participation"  
})

// Short-term (3 months) Outcomes  
CREATE (shortTermOutcomes:SuccessMetric {  
  name: "Short-term (3 months)",  
  type: "Medium-term Measurement",  
  timeframe: "3 months post-training"  
})

CREATE (deepfakeImprovement:Measurement {  
  name: "60% improvement in deepfake detection",  
  type: "Skill Improvement",  
  target: "60%",  
  assessment: "Detection assessments"  
})

CREATE (verificationBehaviors:Measurement {  
  name: "40% increase in verification behaviors",  
  type: "Behavioral Change",  
  target: "40%",  
  description: "Appropriate verification protocol usage"  
})

CREATE (incidentReportingIncrease:Measurement {  
  name: "25% increase in incident reporting",  
  type: "Cultural Change",  
  target: "25%",  
  description: "Legitimate suspicious activity reports"  
})

// Long-term (1 year) Outcomes  
CREATE (longTermOutcomes:SuccessMetric {  
  name: "Long-term (1 year)",  
  type: "Long-term Measurement",  
  timeframe: "1 year post-training"  
})

CREATE (zeroAttacks:Measurement {  
  name: "Zero successful attacks",  
  type: "Security Outcome",  
  target: "0",  
  description: "No successful deepfake/social engineering attacks"  
})

CREATE (cultureOfVerification:Measurement {  
  name: "Culture of verification",  
  type: "Organizational Change",  
  description: "Organization-wide adoption of verification behaviors"  
})

CREATE (regulatoryComplianceMetric:Measurement {  
  name: "Regulatory compliance",  
  type: "Compliance Outcome",  
  description: "Full compliance with AI governance requirements"  
})

// Additional Success Categories  
CREATE (prePostAssessmentMetric:SuccessMetric {  
  name: "Pre/post assessment",  
  type: "Knowledge Measurement",  
  description: "Detection accuracy improvements"  
})

CREATE (behavioralMetricsTracking:SuccessMetric {  
  name: "Behavioral metrics",  
  type: "Behavior Tracking",  
  description: "Verification protocol usage"  
})

CREATE (cultureIndicatorsTracking:SuccessMetric {  
  name: "Culture indicators",  
  type: "Cultural Assessment",  
  description: "Team confidence in threat recognition"  
})

// \============================================================================  
// COMMERCIAL POSITIONING  
// \============================================================================

// Target Market  
CREATE (targetMarket:Commercial {  
  name: "Target Market",  
  type: "Market Segmentation"  
})

CREATE (midMarketOrgs:MarketSegment {  
  name: "Mid-market organizations",  
  type: "Primary Target",  
  size: "500-5,000 employees",  
  characteristics: "Dedicated IT but limited security specialization"  
})

// Value Proposition  
CREATE (valueProposition:Commercial {  
  name: "Value Proposition",  
  type: "Market Positioning",  
  statement: "Turn your monthly security meeting into an engaging team-building exercise that actually reduces cyber risk"  
})

CREATE (engagementTransformation:ValueComponent {  
  name: "Engaging security meetings",  
  type: "Experience Benefit",  
  description: "Transform mandatory training into team-building"  
})

CREATE (riskReduction:ValueComponent {  
  name: "Cyber risk reduction",  
  type: "Security Benefit",  
  description: "Measurable improvement in threat detection"  
})

// Pricing Model  
CREATE (pricingModel:Commercial {  
  name: "Pricing Model",  
  type: "Revenue Strategy"  
})

CREATE (subscriptionPrice:PricingComponent {  
  name: "$2-4 per employee per month",  
  type: "Core Subscription",  
  range: "$2-4",  
  unit: "per employee per month",  
  includes: "Facilitator materials, scenario updates, outcome tracking"  
})

CREATE (facilitatorMaterials:PricingInclusion {  
  name: "Facilitator materials",  
  type: "Implementation Support",  
  description: "Complete guides and resources"  
})

CREATE (scenarioUpdates:PricingInclusion {  
  name: "Scenario updates",  
  type: "Content Service",  
  description: "Monthly new threat scenarios"  
})

CREATE (outcomeTracking:PricingInclusion {  
  name: "Outcome tracking",  
  type: "Analytics Service",  
  description: "Performance measurement dashboard"  
})

// Market Opportunity  
CREATE (marketOpportunity:Commercial {  
  name: "Market Opportunity",  
  type: "Business Potential"  
})

CREATE (totalMarket:MarketMetric {  
  name: "200,000+ target organizations",  
  type: "Total Addressable Market",  
  count: "200,000+",  
  geography: "US market"  
})

CREATE (revenueRange:MarketMetric {  
  name: "$2.4B \- $4.8B total addressable market",  
  type: "Revenue Potential",  
  range: "$2.4B \- $4.8B",  
  description: "Based on pricing model and target market size"  
})

CREATE (highRetention:MarketMetric {  
  name: "High retention through continuous content updates",  
  type: "Retention Strategy",  
  factor: "Continuous content updates"  
})

// Revenue Streams  
CREATE (revenueStreams:Commercial {  
  name: "Revenue Streams",  
  type: "Business Model"  
})

CREATE (coreSubscription:RevenueStream {  
  name: "Core subscription",  
  type: "Primary Revenue",  
  description: "Base game access and standard content"  
})

CREATE (customScenarios:RevenueStream {  
  name: "Custom scenario development",  
  type: "Premium Service",  
  description: "Industry-specific or organization-specific content"  
})

CREATE (advancedAnalytics:RevenueStream {  
  name: "Advanced analytics package",  
  type: "Premium Service",  
  description: "Enhanced reporting and insights"  
})

// Success Factors  
CREATE (successFactors:Commercial {  
  name: "Success Factors",  
  type: "Critical Success Elements"  
})

CREATE (measurableROI:SuccessFactor {  
  name: "Measurable ROI",  
  type: "Value Demonstration",  
  description: "Clear behavioral metrics and incident reduction"  
})

CREATE (easeOfImplementation:SuccessFactor {  
  name: "Immediate implementation",  
  type: "Adoption Barrier Removal",  
  description: "No complex technology requirements"  
})

CREATE (cisoLedApproach:SuccessFactor {  
  name: "CISO-led facilitation",  
  type: "Leadership Buy-in",  
  description: "Security leadership directly involved"  
})

CREATE (complianceSupport:SuccessFactor {  
  name: "Regulatory compliance support",  
  type: "Risk Mitigation",  
  description: "Built-in ethics and governance training"  
})

// \============================================================================  
// RELATIONSHIPS \- CORE GAME MECHANICS  
// \============================================================================

CREATE (game)-\[:HAS\_MECHANIC\]-\>(sdc)  
CREATE (game)-\[:HAS\_MECHANIC\]-\>(scoring)  
CREATE (game)-\[:HAS\_MECHANIC\]-\>(roleRot)

CREATE (sdc)-\[:INCLUDES\]-\>(binary)  
CREATE (sdc)-\[:INCLUDES\]-\>(teams)  
CREATE (sdc)-\[:INCLUDES\]-\>(timing)  
CREATE (sdc)-\[:INCLUDES\]-\>(feedback)  
CREATE (sdc)-\[:INCLUDES\]-\>(difficulty)

CREATE (scoring)-\[:AWARDS\]-\>(correct)  
CREATE (scoring)-\[:PENALIZES\]-\>(falsePos)  
CREATE (scoring)-\[:PENALIZES\]-\>(missed)  
CREATE (scoring)-\[:AWARDS\]-\>(bonus)

CREATE (roleRot)-\[:INCLUDES\_ROLE\]-\>(employee)  
CREATE (roleRot)-\[:INCLUDES\_ROLE\]-\>(manager)  
CREATE (roleRot)-\[:INCLUDES\_ROLE\]-\>(itSupport)  
CREATE (roleRot)-\[:INCLUDES\_ROLE\]-\>(executive)

// \============================================================================  
// RELATIONSHIPS \- SESSION DETAILS  
// \============================================================================

CREATE (game)-\[:HAS\_MECHANIC\]-\>(sessionStructure)  
CREATE (sessionStructure)-\[:INCLUDES\_SESSION\]-\>(session1)  
CREATE (sessionStructure)-\[:INCLUDES\_SESSION\]-\>(session2)  
CREATE (sessionStructure)-\[:INCLUDES\_SESSION\]-\>(session3)  
CREATE (sessionStructure)-\[:INCLUDES\_SESSION\]-\>(session4)

// Session 1 relationships  
CREATE (session1)-\[:HAS\_COMPONENT\]-\>(s1\_welcome)  
CREATE (session1)-\[:HAS\_COMPONENT\]-\>(s1\_overview)  
CREATE (session1)-\[:HAS\_COMPONENT\]-\>(s1\_game)  
CREATE (session1)-\[:HAS\_COMPONENT\]-\>(s1\_debrief)  
CREATE (session1)-\[:HAS\_COMPONENT\]-\>(s1\_preview)  
CREATE (session1)-\[:INCLUDES\_SCENARIO\]-\>(s1\_scenario1)  
CREATE (session1)-\[:INCLUDES\_SCENARIO\]-\>(s1\_scenario2)  
CREATE (session1)-\[:INCLUDES\_SCENARIO\]-\>(s1\_scenario3)  
CREATE (session1)-\[:INCLUDES\_SCENARIO\]-\>(s1\_scenario4)  
CREATE (session1)-\[:INCLUDES\_SCENARIO\]-\>(s1\_scenario5)  
CREATE (session1)-\[:INCLUDES\_SCENARIO\]-\>(s1\_scenario6)  
CREATE (session1)-\[:ADDRESSES\_ETHICS\]-\>(ethics1)

// Session 2 relationships  
CREATE (session2)-\[:INCLUDES\_SCENARIO\]-\>(s2\_scenario1)  
CREATE (session2)-\[:INCLUDES\_SCENARIO\]-\>(s2\_scenario2)  
CREATE (session2)-\[:INCLUDES\_SCENARIO\]-\>(s2\_scenario3)  
CREATE (session2)-\[:INCLUDES\_SCENARIO\]-\>(s2\_scenario4)  
CREATE (session2)-\[:INCLUDES\_SCENARIO\]-\>(s2\_scenario5)  
CREATE (session2)-\[:INCLUDES\_SCENARIO\]-\>(s2\_scenario6)  
CREATE (session2)-\[:ADDRESSES\_ETHICS\]-\>(ethics2)

// Session 3 relationships  
CREATE (session3)-\[:INCLUDES\_SCENARIO\]-\>(s3\_scenario1)  
CREATE (session3)-\[:INCLUDES\_SCENARIO\]-\>(s3\_scenario2)  
CREATE (session3)-\[:INCLUDES\_SCENARIO\]-\>(s3\_scenario3)  
CREATE (session3)-\[:INCLUDES\_SCENARIO\]-\>(s3\_scenario4)  
CREATE (session3)-\[:INCLUDES\_SCENARIO\]-\>(s3\_scenario5)  
CREATE (session3)-\[:INCLUDES\_SCENARIO\]-\>(s3\_scenario6)  
CREATE (session3)-\[:ADDRESSES\_ETHICS\]-\>(ethics3)

// Session 4 relationships  
CREATE (session4)-\[:HAS\_COMPONENT\]-\>(s4\_welcome)  
CREATE (session4)-\[:HAS\_COMPONENT\]-\>(s4\_case)  
CREATE (session4)-\[:HAS\_COMPONENT\]-\>(s4\_scenario)  
CREATE (session4)-\[:HAS\_COMPONENT\]-\>(s4\_planning)  
CREATE (session4)-\[:ADDRESSES\_ETHICS\]-\>(ethics4)

// Session progression  
CREATE (session1)-\[:PROGRESSES\_TO\]-\>(session2)  
CREATE (session2)-\[:PROGRESSES\_TO\]-\>(session3)  
CREATE (session3)-\[:PROGRESSES\_TO\]-\>(session4)

// \============================================================================  
// RELATIONSHIPS \- IMPLEMENTATION  
// \============================================================================

CREATE (game)-\[:REQUIRES\_IMPLEMENTATION\]-\>(cisoFacilitation)  
CREATE (game)-\[:REQUIRES\_IMPLEMENTATION\]-\>(techReqs)  
CREATE (game)-\[:REQUIRES\_IMPLEMENTATION\]-\>(contentSources)  
CREATE (game)-\[:REQUIRES\_IMPLEMENTATION\]-\>(measurableOutcomes)  
CREATE (game)-\[:REQUIRES\_IMPLEMENTATION\]-\>(spacedRepetition)

// CISO Facilitation relationships  
CREATE (cisoFacilitation)-\[:INCLUDES\_PHASE\]-\>(preSession)  
CREATE (cisoFacilitation)-\[:INCLUDES\_PHASE\]-\>(duringSession)  
CREATE (cisoFacilitation)-\[:INCLUDES\_PHASE\]-\>(postSession)

// Technology relationships  
CREATE (techReqs)-\[:REQUIRES\]-\>(laptop)  
CREATE (techReqs)-\[:REQUIRES\]-\>(audio)  
CREATE (techReqs)-\[:REQUIRES\]-\>(scoringApp)  
CREATE (techReqs)-\[:REQUIRES\]-\>(timer)

// Content source relationships  
CREATE (contentSources)-\[:USES\_SOURCE\]-\>(realAttacks)  
CREATE (contentSources)-\[:USES\_SOURCE\]-\>(internalExamples)  
CREATE (contentSources)-\[:USES\_SOURCE\]-\>(industryThreats)  
CREATE (contentSources)-\[:USES\_SOURCE\]-\>(complianceScenarios)

// Measurement relationships  
CREATE (measurableOutcomes)-\[:USES\_TOOL\]-\>(prePostAssess)  
CREATE (measurableOutcomes)-\[:USES\_TOOL\]-\>(behavioralMetrics)  
CREATE (measurableOutcomes)-\[:USES\_TOOL\]-\>(incidentReporting)  
CREATE (measurableOutcomes)-\[:USES\_TOOL\]-\>(cultureIndicators)

// Spaced repetition relationships  
CREATE (spacedRepetition)-\[:INCLUDES\_COMPONENT\]-\>(monthlyMini)  
CREATE (spacedRepetition)-\[:INCLUDES\_COMPONENT\]-\>(quarterlyRefresh)  
CREATE (spacedRepetition)-\[:INCLUDES\_COMPONENT\]-\>(annualFull)  
CREATE (spacedRepetition)-\[:INCLUDES\_COMPONENT\]-\>(realTimeAlerts)

// \============================================================================  
// RELATIONSHIPS \- COMPETITIVE ADVANTAGES  
// \============================================================================

CREATE (game)-\[:HAS\_ADVANTAGE\]-\>(professionalFocus)  
CREATE (game)-\[:HAS\_ADVANTAGE\]-\>(scalability)  
CREATE (game)-\[:HAS\_ADVANTAGE\]-\>(regulatoryAlignment)  
CREATE (game)-\[:HAS\_ADVANTAGE\]-\>(balancedDesign)

// Professional Focus relationships  
CREATE (professionalFocus)-\[:INCLUDES\]-\>(workplaceScenarios)  
CREATE (professionalFocus)-\[:INCLUDES\]-\>(realisticTimePressure)  
CREATE (professionalFocus)-\[:INCLUDES\]-\>(businessImpact)

// Scalability relationships  
CREATE (scalability)-\[:ENABLES\]-\>(facilitatorGuide)  
CREATE (scalability)-\[:ENABLES\]-\>(modularContent)  
CREATE (scalability)-\[:ENABLES\]-\>(progressiveDifficultyAdv)

// Regulatory relationships  
CREATE (regulatoryAlignment)-\[:PROVIDES\]-\>(builtInEthics)  
CREATE (regulatoryAlignment)-\[:PROVIDES\]-\>(documentedOutcomes)  
CREATE (regulatoryAlignment)-\[:PROVIDES\]-\>(policyIntegration)

// Balanced design relationships  
CREATE (balancedDesign)-\[:ACHIEVES\]-\>(credibilityFactor)  
CREATE (balancedDesign)-\[:ACHIEVES\]-\>(engagementFactor)  
CREATE (balancedDesign)-\[:ACHIEVES\]-\>(behaviorChangeAdv)

// \============================================================================  
// RELATIONSHIPS \- MEASURABLE OUTCOMES  
// \============================================================================

CREATE (game)-\[:MEASURES\_SUCCESS\_WITH\]-\>(immediateOutcomes)  
CREATE (game)-\[:MEASURES\_SUCCESS\_WITH\]-\>(shortTermOutcomes)  
CREATE (game)-\[:MEASURES\_SUCCESS\_WITH\]-\>(longTermOutcomes)  
CREATE (game)-\[:TRACKS\_WITH\]-\>(prePostAssessmentMetric)  
CREATE (game)-\[:TRACKS\_WITH\]-\>(behavioralMetricsTracking)  
CREATE (game)-\[:TRACKS\_WITH\]-\>(cultureIndicatorsTracking)

// Immediate outcomes relationships  
CREATE (immediateOutcomes)-\[:INCLUDES\_METRIC\]-\>(participation)  
CREATE (immediateOutcomes)-\[:INCLUDES\_METRIC\]-\>(detectionAccuracy)  
CREATE (immediateOutcomes)-\[:INCLUDES\_METRIC\]-\>(consistentEngagement)

// Short-term outcomes relationships  
CREATE (shortTermOutcomes)-\[:INCLUDES\_METRIC\]-\>(deepfakeImprovement)  
CREATE (shortTermOutcomes)-\[:INCLUDES\_METRIC\]-\>(verificationBehaviors)  
CREATE (shortTermOutcomes)-\[:INCLUDES\_METRIC\]-\>(incidentReportingIncrease)

// Long-term outcomes relationships  
CREATE (longTermOutcomes)-\[:INCLUDES\_METRIC\]-\>(zeroAttacks)  
CREATE (longTermOutcomes)-\[:INCLUDES\_METRIC\]-\>(cultureOfVerification)  
CREATE (longTermOutcomes)-\[:INCLUDES\_METRIC\]-\>(regulatoryComplianceMetric)

// Progression relationships  
CREATE (immediateOutcomes)-\[:LEADS\_TO\]-\>(shortTermOutcomes)  
CREATE (shortTermOutcomes)-\[:LEADS\_TO\]-\>(longTermOutcomes)

// \============================================================================  
// RELATIONSHIPS \- COMMERCIAL POSITIONING  
// \============================================================================

CREATE (game)-\[:TARGETS\]-\>(targetMarket)  
CREATE (game)-\[:OFFERS\]-\>(valueProposition)  
CREATE (game)-\[:USES\_PRICING\]-\>(pricingModel)  
CREATE (game)-\[:HAS\_OPPORTUNITY\]-\>(marketOpportunity)  
CREATE (game)-\[:GENERATES\_REVENUE\_THROUGH\]-\>(revenueStreams)  
CREATE (game)-\[:SUCCEEDS\_THROUGH\]-\>(successFactors)

// Target Market relationships  
CREATE (targetMarket)-\[:FOCUSES\_ON\]-\>(midMarketOrgs)

// Value Proposition relationships  
CREATE (valueProposition)-\[:DELIVERS\]-\>(engagementTransformation)  
CREATE (valueProposition)-\[:DELIVERS\]-\>(riskReduction)

// Pricing Model relationships  
CREATE (pricingModel)-\[:INCLUDES\]-\>(subscriptionPrice)  
CREATE (subscriptionPrice)-\[:INCLUDES\_SERVICE\]-\>(facilitatorMaterials)  
CREATE (subscriptionPrice)-\[:INCLUDES\_SERVICE\]-\>(scenarioUpdates)  
CREATE (subscriptionPrice)-\[:INCLUDES\_SERVICE\]-\>(outcomeTracking)

// Market Opportunity relationships  
CREATE (marketOpportunity)-\[:ADDRESSES\]-\>(totalMarket)  
CREATE (marketOpportunity)-\[:REPRESENTS\]-\>(revenueRange)  
CREATE (marketOpportunity)-\[:ACHIEVES\]-\>(highRetention)

// Revenue Streams relationships  
CREATE (revenueStreams)-\[:INCLUDES\_STREAM\]-\>(coreSubscription)  
CREATE (revenueStreams)-\[:INCLUDES\_STREAM\]-\>(customScenarios)  
CREATE (revenueStreams)-\[:INCLUDES\_STREAM\]-\>(advancedAnalytics)

// Success Factors relationships  
CREATE (successFactors)-\[:REQUIRES\]-\>(measurableROI)  
CREATE (successFactors)-\[:REQUIRES\]-\>(easeOfImplementation)  
CREATE (successFactors)-\[:REQUIRES\]-\>(cisoLedApproach)  
CREATE (successFactors)-\[:REQUIRES\]-\>(complianceSupport)

// \============================================================================  
// CROSS-CATEGORY RELATIONSHIPS  
// \============================================================================

CREATE (sdc)-\[:SUPPORTS\]-\>(session1)  
CREATE (session1)-\[:MEASURED\_BY\]-\>(immediateOutcomes)  
CREATE (professionalFocus)-\[:APPEALS\_TO\]-\>(targetMarket)  
CREATE (shortTermOutcomes)-\[:VALIDATES\]-\>(valueProposition)  
CREATE (cisoFacilitation)-\[:ENABLES\]-\>(scalability)  
CREATE (spacedRepetition)-\[:DRIVES\]-\>(highRetention)  
CREATE (ethics1)-\[:CONTRIBUTES\_TO\]-\>(regulatoryAlignment)

// \============================================================================  
// END OF TRUST SIGNAL KNOWLEDGE GRAPH  
// \============================================================================  
