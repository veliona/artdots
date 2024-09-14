import style from './page.module.css';
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default async function Privacy() {
    return (
        <div>
            <div className={`${style.container} ${poppins.className}`}>
                <div className={`${style.container__title} ${poppins.className}`}>
                    <p>Artdots</p>
                    <p>Privacy Policy</p>
                </div>
                <ol>
                    <p>1. Introduction</p>
                    <p>Artdots is committed to maintaining the accuracy, confidentiality, and security of your Personal Data. This Privacy Policy describes how your personal information is collected, used, and shared when you sign up using your email address, or visit our website, including artdots.co (collectively, the “Services”). By using any of our Services, you are accepting the practices described in our Privacy Policy and you consent to receive it via electronic form via publication on the world wide web between you (“you,” “user,” “your”) and Artdots (“us,” we”, "our", “Artdots”). This Privacy Policy is part of our Terms and Conditions which govern your use of the site, and services. This Privacy Policy does not apply to any products, services, websites, or content that are offered by third parties (“Third Party Services”, “service providers”), which are governed by their respective privacy policies. Please read this policy carefully to understand our practices regarding your personal data and how we treat it. By using our website or services, you acknowledge that you have read and understood and consent to this Privacy Policy.
                    </p>
                </ol>
                <ol>
                    <p>2. Data Collection and Processing</p>
                    <p>By using our website, you agree to the terms of this Privacy Policy and give explicit consent for the processing of your data automatically through your usage. As part of our website and services, you may be asked to provide certain information about you. We collect personal information that you provide or input on the site, including contact information, such as your email address. Additionally, we may collect information automatically about users via a variety of methods, such as cookies, web beacons, JavaScript, and log files. This information may include user IP addresses, browser types, domain names, device type, time stamp, referring URL and other log file information; user activities within the Service; aggregate and statistical information regarding overall server/visitor traffic and navigation patterns for the Service. Web servers collect this type of basic information automatically as part of Web log processes.</p>
                    <p><b>Personal data</b></p>
                    <p>We may use the personal data you provide to the Service for the following purposes:</p>
                    <ul>
                        <li>To communicate with you;</li>
                        <li>To provide features available in the Service;</li>
                        <li>To develop, improve, and protect the Service;</li>
                        <li>To comply with applicable legal obligations, including responding to a subpoena or court order;</li>
                        <li>To enforce our terms, conditions and policies;</li>
                        <li>To prevent any misuses; and</li>
                        <li>To protect our rights and/or our property.</li>
                    </ul>

                    <p><b>Data collected automatically</b></p>
                    <p>We may use the data collected automatically for the following purposes:</p>
                    <ul>
                        <li>To manage the Service;</li>
                        <li>To provide features available in the Service;</li>
                        <li>To develop, improve, and protect the Service;</li>
                        <li>For market research and data analysis, including for example reading recommendations and behavioral targeting and targeted marketing, in accordance with applicable law;</li>
                        <li>To audit and analyze the Service; and</li>
                        <li>To ensure the technical functionality and security of the Service.</li>
                    </ul>
                </ol>
                <ol>
                    <p>3. Data Sharing with Third-Parties</p>
                    <p>We share the information we collect as follows:</p>
                    <p>Legal Disclosures</p>
                    <ul>
                        <li>We may disclose a user’s information (including personal information) where we believe that we are required to do so in order to comply with an applicable statute, regulation, rule or law, a subpoena, a warrant or administrative request, a court or regulatory order, or other valid legal processes.</li>
                        <li>We may also disclose personal information where we believe it is necessary to identify, contact or bring legal action against someone who may be violating the Terms of Service for our Service, for assistance with a delinquent account, as evidence in litigation in which we are involved, or to protect the safety and/or security of our users, the Service or the general public.</li>
                    </ul>
                    <p>Service Providers</p>
                    <ul>
                        <li>We may contract with independent contractors, vendors and suppliers to provide specific services related to the Service, such as hosting and maintaining the Service, data analysis and analytics, and developing applications for the Service, email services and marketing enrichment services.</li>
                        <li>We may disclose a Service user’s information to these service providers as necessary for those service providers to provide their service.</li>
                        <li>Aggregate and De-Identified Information</li>
                        <li>We may also provide aggregate, anonymous or de-identified information about users and the Service for marketing and research purposes. For example, we might inform third parties regarding the number of unique users who visit the Service, the demographic breakdown of our registered users of the Service, and the behavior of users.</li>
                    </ul>
                </ol>
                <ol>
                    <p>4. Cookies and Tracking Technologies</p>
                    <p>The Website, in line with almost every other internet-based company, utilizes cookie technology to allow the company to improve the functionality of the service and improve your user experience. Your browser or device may allow you to block or delete cookies from our site, however, this may interfere with the functionality of our Service. Cookies collect information automatically. The information collected may include information about the platform and operating system you are using, your browser type and version, computer and connection information, and what time you accessed the site. This information will be collected any time you access the website unless you opt out.</p>

                    <p>Cookies are small pieces of data, stored in text files, that are stored on your computer or other device when websites are loaded in a browser. They are widely used to “remember” you and your preferences, either for a single visit (through a “session cookie”) or for multiple repeat visits (using a “persistent cookie”). They ensure a consistent and efficient experience for visitors, and perform essential functions such as allowing users to register and remain logged in. Cookies may be set by the site that you are visiting (known as “first party cookies”), or by third parties, such as those who serve content or provide advertising or analytics services on the website (“third party cookies”). Both websites and HTML emails may also contain other tracking technologies such as “web beacons” or “pixels.” These are typically small transparent images that provide us with statistics, for similar purposes as cookies. They are often used in conjunction with cookies, though they are not stored on your computer in the same way. As a result, if you disable cookies, web beacons may still load, but their functionality will be restricted.</p>

                    <p>Which cookies does Artdots use?</p>
                    <p>Anytime you visit and use a our website, Artdots or a third party places cookies in your browser. Certain cookies are specific to features or specific preferences, and certain cookies will be used all the time. Four different types of cookies are used by us.</p>

                    <ul>
                        <li>
                            <p>Analytics Cookies</p>
                            <p>Also known as “performance cookies,” analytics cookies collect information about visits to our sites and how the services we offer are being used. We use this data to make improvements and report our performance. For example, these cookies collect information about how visitors use our sites, which site the visitor came from, the number of each user’s visits and how long a user stays on the site. We might also use analytics cookies to test pages, or features to see how users react to them. Analytics cookies are primarily third-party cookies.</p>
                        </li>
                        <li>
                            <p>Functionality Cookies</p>
                            <p>Sometimes called “preference cookies”, these first-party cookies allow us to remember information you have entered or choices you have made (such as your username, language, region, and marketing preferences) on our sites, so the next time you visit the site you will not have to set them again. These cookies also allow us to provide a better user experience on our website.</p>
                        </li>
                    </ul>

                    <p>How can you manage and delete cookies?</p>
                    <p>Almost all browsers use cookies to track your internet use automatically. However, these browsers also allow you to change the settings in your browser to manage your cookie settings to delete any previously sent cookies and to not accept new cookies. Again, please keep in mind that disabling cookies will negatively impact your user experience with our site. Please review your browser’s settings and preferences for more information on how to manage and delete cookies. Browsers on mobile devices may have different ways to manage cookie settings.</p>

                    <p>Does Artdots use any other user tracking technologies?</p>
                    <p>Technology used on the Internet is constantly changing. Artdots uses technology standard to the Internet, such as pixel tags, web beacons, and other similar technologies, to track visitors to our sites.</p>

                    <p>How do we respond to “Do Not Track” Signals?</p>
                    <p>We do not currently recognize automated browser signals regarding tracking mechanisms, which may include "Do Not Track" instructions. You can change your privacy preferences regarding the use of cookies and similar technologies through your browser. For more information on Do Not Track please visit http://www.allaboutdnt.org/</p>
                </ol>
                <ol>
                    <p>5. User Rights and Control</p>
                    <p>You have the right to access, rectify, and erase your data. You can contact us at hello@artdots.co to review the personal data you have provided to the Service. We seek to swiftly respond to your inquiry. The right to have incomplete, incorrect, outdated, or unnecessary personal data corrected, deleted, or updated. The easiest way to correct, delete, or update the personal data you have provided to the Service is to access your profile settings and enter the necessary changes there. If you have additional questions regarding the correction, deletion, or updating of the personal data we hold about you, please contact us at hello@artdots.co.</p>
                    <p>The right to opt out of receiving electronic direct marketing communications from us: All electronic direct marketing communications that you may receive from us, such as e-mail messages, give you an option of not receiving such communications from us in the future. If you have any additional questions about electronic direct marketing received from us, please contact us at hello@artdots.co.</p>

                    <p>We will continue to process your data for the period of time required to satisfy the purposes for which it was collected, or until you object to us so doing.</p>

                    <p>To process your information as described above, we rely on the following legal bases:</p>
                    <ul>
                        <li>
                            <p>Contractual Necessity</p>
                            <p>To provide you with the Artdots service and perform the contract that you have with us.</p>
                        </li>
                        <li>
                            <p>Legitimate Interests</p>
                            <p>It is in our legitimate interests to improve and analyze our Website, promote our products, maintain security of our Website, and provide functionality.</p>
                        </li>
                        <li>
                            <p>Consent</p>
                            <p>In instances where we ask for consent, you may withdraw your consent at any time by contacting us.</p>
                            <p>Please contact us at hello@artdots.co for more information.</p>
                        </li>
                    </ul>

                    <p>What Additional Rights Do Nevada Users Have?</p>
                    <p>Under the Nevada Privacy Law (SB220), certain Nevada residents may opt out of the sale of “personally identifiable information” for monetary consideration to a person for that person to license or sell such information to additional persons. “Personally identifiable information” includes first and last name, address, email address, phone number, Social Security Number, or an identifier that allows a specific person to be contacted either physically or online.
                        Artdots does not sell your personally identifiable information. However, if you are a Nevada resident who has purchased or leased goods or services from us, you may submit a request to opt out of any potential future sales under Nevada law by emailing hello@artdots.com. If our policy on selling personal identifiable information changes, we will honor your request.</p>

                    <p>What Additional Rights Do California Users Have?</p>
                    <p>The California Consumer Privacy Act provides some California residents with the additional rights listed below.</p>
                    <ul>
                        <li><p>Right to Know.</p>
                            <p>You have the right to know and see what data we have collected about you over the past twelve (12) months, including:</p>
                            <ul>
                                <li>The categories of personal information we have collected about you;</li>
                                <li>The categories of sources from which the personal information is collected;</li>
                                <li>The business or commercial purpose for collecting your personal information;</li>
                                <li>The categories of third parties with whom we have shared your personal information; and</li>
                                <li>The specific pieces of personal information we have collected about you.</li>
                            </ul>
                        </li>
                        <li><p>Right to Delete.</p>
                            <p>You have the right to request that we delete the personal information we have collected from you (and direct our service providers to do the same). There are a number of exceptions, however, that include, but are not limited to, when the information is necessary for us or a third party to do any of the following:</p>
                            <ul>
                                <li>Provide you with a good or service, or otherwise perform a contract between us and you;</li>
                                <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
                                <li>Fix our system in the case of a bug;</li>
                                <li>Protect the free speech rights of you or other users;</li>
                                <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et seq.);</li>
                                <li>Comply with a legal obligation; or</li>
                                <li>Make other internal and lawful uses of the information that are compatible with the context in which you provided it.</li>
                            </ul>
                        </li>
                        <li><p>Other Rights.</p>
                            <p>You have the right to request and obtain from us once a year, free of charge, information about the personal information (if any) we disclose to third parties for their own direct marketing purposes in the preceding calendar year. If applicable, this information would include a list of the categories of personal information that was shared and the names and addresses of all third parties with which we shared information in the immediately preceding calendar year. You also have the right not to be discriminated against for exercising any of the rights listed above.</p>
                            <ul>
                                <li>
                                    <p>Exercising Your California Privacy Rights.</p>
                                    <p>To request access to or deletion of your personal information, or to exercise any other data rights under California law, you may write to us at hello@artdots.com. Please include your full name and email address associated with your use of our services, along with why you are writing, so that we can process your request in an efficient manner.</p>
                                </li>
                                <li>
                                    <p>Response Timing and Format.</p>
                                    <p>We aim to respond to a consumer request for access or deletion within 45 days of receiving that request. If we require more time, we will inform you of the reason and extension period in writing.</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>What Additional Rights do EEA Residents Have?</p>
                            <p>If you are resident outside the United States, including in United Kingdom, Switzerland, the EEA; European Economic Area (“EEA”), which includes the member states of the European Union (“EU”), we transfer Personal Data provided by you for processing in the United States, including Personal Information sent via e-mails or when you create an account. Under the GDPR, we are considered a “controller” and a “co-processor” of the Personal Data of EEA Residents. By providing Personal Data to us for the purpose of using the service, website or mobile application, you consent to the processing of such data in the United States. The transfer of your Personal Data to the United States is necessary for the performance of a contract between you and us for your use of the website or mobile application.</p>
                            <p>Please note that the United States does not have data protection laws equivalent to those in the EEA and other jurisdictions.</p>

                            <p>Rights of EEA Residents</p>
                            <p>This section of the Privacy Policy is applicable to residents of the EEA, which consists of the member states of the European Union. This section also applies to residents of Switzerland and residents of the United Kingdom. Residents of the EEA, UK and Switzerland are referred to here as “EEA Residents.”</p>
                            <p>All processing of Personal Data of EEA Residents is performed by us in accordance with the General Data Protection Regulation (2016/679) of the European Parliament and of the Council on the protection of natural persons regarding the processing of Personal Data and on the free movement of such data (“GDPR”).</p>
                            <p>Under the GDPR, we are both the controller and a co-processor of the Personal Data of EEA Residents. Our purpose for collecting and processing Personal Data from EEA Residents is to provide them with the features and functionalities of our website and mobile application and information regarding our services. The legal basis for collecting Personal Data is because it is necessary for performance of a contract between us to provide you with the website and mobile application and its related features and functionality. We also rely on your consent to receive information about our services. You may withdraw consent from receiving marketing and promotional communications by clicking the “Update Email Preferences” link on the communication. If EEA Residents do not provide Personal Data to us or withdraw consent for processing such Personal Data, we may not be able to provide such residents with certain features or functionalities of the website or mobile application or information regarding the services, including processing payments.</p>
                            <p>If you are an EEA resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us at hello@artdots.co.</p>
                            <p>Additionally, if you are an EEA resident, we are hereby notifying you that we are processing your information in order to fulfill contracts we might have with you, or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to the United States.</p>
                            <p>Security of Transmission of Personal Information and Risks Related to the Internet</p>
                            <p>Our website and mobile application have security measures in place to help protect against the loss, theft, misuse and unauthorized access, disclosure, alteration and destruction of the information under the company’s control. The website uses no encryption (data scrambling) on certain portions of the website, but does use encryption on portions where you are transmitting financial information, such as credit card information. When you are on any website that asks you for confidential information, you should check to see if the information being transmitted is encrypted in order to increase the security of your information. Although every effort is made to ensure no one else will view, seize or obtain your information, complete confidentiality and security is not yet possible over the Internet. Any unencrypted email communication over the Internet is not secure or confidential, and is subject to possible interception, loss and alteration. The company, its agents, administrators, employees and affiliates may not be held liable for any damages you or anyone else may suffer or incur as a result of the transmission of confidential or sensitive information over the Internet, and all such communications will be made at your own risk.</p>
                            <p>We seek to use reasonable organizational, technical and administrative measures to protect Personal Information under our control. For example, we seek to use Secure Sockets Layer ("SSL") technology for all financial transactions conducted through the website or mobile application.</p>
                            <p>Unfortunately, no data storage system or data transmission over the Internet can be guaranteed to be 100% secure. Please also be aware that we may use third-party cloud service providers that provide hosting, data storage and other services pursuant to standard terms and conditions that may be non-negotiable; these service providers have informed us or the general public that they apply security measures they consider adequate for the protection of information within their system, or they have a general reputation for applying such measures.</p>
                        </li>
                    </ul>
                </ol>
                <ol>
                    <p>6. Updates and Compliance</p>
                    <p>We may amend this Privacy Policy from time to time. We will provide notice of any material changes made to our Privacy Policy by prominently posting the revised Policy with an updated date of revision on our homepage. We encourage users to check this page periodically for any changes. If we make any material changes that affects information we have previously collected about you, we will provide you with notice via email or within the Service.</p>
                    <p>If we decide to change our privacy policy, we will update the privacy policy modification date below. This policy was last modified on September 3, 2024.</p>

                    <p>If you have any questions about this Privacy Policy or our security measures at Artdots, please contact our Data Protection Officer at the contact information listed below. Your continued use of the Service following any changes to this Privacy Policy constitutes your acceptance of any such changes made.</p>
                    <p>Email: hello@artdots.com</p>
                </ol>
            </div>
        </div>
    )
}