
import Link from 'next/link';

export default function Experiences() {
    return (
        <div className='h-screen flex flex-col space-y-2 justify-center items-center'>
            {/* <h1>Work Experiences</h1>
             */}
            <div className='flex flex-col space-y-4'>
                <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Student Workplacement Program</h5>
                    <p className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Axiom Connected, Port Macquarie</p>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Oct 2023 - Jan 2024</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        My role involved learning about different software deployment practices and implementing CI/CD pipelines. 
                        I gained hands-on experience in setting up multiple environments, researching different hosting environments, and automating the build, testing, and deployment processes.
                    </p>
                </a>
            
                <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Associate Software Engineer</h5>
                    <p className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Pioneer Solutions(Acquired by Hitachi Energy)</p>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">May 2019 - July 2022</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    I developed features for CTRM software using PHP, JavaScript, and AJAX. My role involved creating  UI for the software with the DHTMLX framework (JavaScript UI Library), 
                    and writing CRUD operations for PHP forms and other features using TSQL.
                    I also designed, implemented, and updated database schemas and tables, and wrote stored procedures, functions, and jobs using TSQL. Additionally, I implemented functional tests and integration tests with unit testing.
                    My work followed Agile/Scrum methodology, utilizing the Jira ticketing system to manage and track tasks.
                    </p>
                </a>
            </div>

        
        </div>
    );
}