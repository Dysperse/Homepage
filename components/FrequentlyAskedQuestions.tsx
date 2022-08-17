import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";

export function FrequentlyAskedQuestions() {
  React.useEffect(() => {
    const interval = setTimeout(() => {
      document.getElementById("panel1")!.click();
    }, 200);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <p className="mt-2 text-3xl text-center mb-5 leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
        Frequently asked questions
      </p>{" "}
      <Accordion flush alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title id="panel1">Is Smartlist free?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Smartlist is 100% free, forever. No hidden fees, no ads, or credit
              card required!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Can I use Smartlist for my dorm or apartment?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Absolutely! Smartlist is compatible with student dormitories and
              apartments.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How secure is Smartlist?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              At Smartlist, we take your privacy{" "}
              <Link rel="noreferrer" href="/privacy">
                very seriously
              </Link>
              . Your account data is encrypted with AES 256-bit encryption. You
              can enable two-factor authentication to increase your account
              security.
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Smartlist is also open source. You can view the source code on
              GitHub
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the limitations?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              At Smartlist, we believe that you shouldn&apos;t pay to organize
              your home. However, this comes with some limitations, as this is a
              free service.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Learn more about these limitations:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <b>500</b> maximum number of items per home
              </li>
              <li>
                <b>150</b> maximum number of items per room
              </li>
              <li>
                <b>5</b> maximum rooms
              </li>
              <li>
                <b>20</b> maximum number of items per list
              </li>
              <li>
                <b>7</b> maximum number of custom lists (excluding shopping and
                to-do lists)
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How can I contribute?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              You can apply for a volunteer position at Smartlist by visiting{" "}
              <a
                href="/join"
                className="text-blue-800 focus:ring-2 ring-black"
                target="_blank"
              >
                www.smartlist.tech/join
              </a>
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Smartlist is also open source. You can view the source code on
              GitHub
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            Can I use Smartlist to perform transactions?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              No, you cannot perform transactions with Smartlist.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
