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
      <Accordion flush alwaysOpen>
        <Accordion.Panel>
          <Accordion.Title id="panel1">Is Smartlist free?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Smartlist is 100% free, forever. No hidden fees, no ads, or credit
              card information required!
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
              security. Smartlist is also open source. You can view the source
              code on GitHub
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How did Smartlist start?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Smartlist started in 2020, during the peak COVID-19 pandemic. We
              often found people struggling with goal-setting, task management,
              and home inventory. We decided to create a solution that would
              help people organize their lives. Since then, Smartlist has grown
              to more than 100K monthly active users!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How do I contact support?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              You can contact support by emailing{" "}
              <Link
                href="mailto:hello@smartlist.tech"
                style={{
                  color: "#3B82F6!important",
                  textDecoration: "underline",
                }}
              >
                hello@smartlist.tech
              </Link>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between Smartlist and other task managers?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Smartlist is a task manager that focuses on everything in general,
              from life goals, to daily tasks, to shopping lists. Smartlist is
              also a home inventory manager, which allows you to keep track of
              your belongings.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between Smartlist and other home inventory
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 block bg-gray-100 px-10 py-8 rounded-2xl">
              Smartlist is the one and only home inventory manager that allows you to seamlessly add and organize your items, with features to tidy your home. Smartlist provides a feature-rich and intuitive UI to organize your things. Furthermore, unlike other home inventory managers, Smartlist is free, forever. 
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
