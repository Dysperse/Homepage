import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />

        <meta
          name="title"
          content="Dysperse: A radically different, unified productivity platform"
        />
        <meta
          name="description"
          content="Meet Dysperse: The ultimate productivity platform that streamlines your life with planners, boards, routines, and more. Say goodbye to scattered tasks and hello to seamless productivity with Dysperse."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dysperse.com" />
        <meta
          property="og:title"
          content="Dysperse: A radically different, unified productivity platform"
        />
        <meta
          property="og:description"
          content="Meet Dysperse: The ultimate productivity platform that streamlines your life with planners, boards, routines, and more. Say goodbye to scattered tasks and hello to seamless productivity with Dysperse."
        />
        <meta property="og:image" content="/meta.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dysperse.com" />
        <meta
          property="twitter:title"
          content="Dysperse: A radically different, unified productivity platform"
        />
        <meta
          property="twitter:description"
          content="Meet Dysperse: The ultimate productivity platform that streamlines your life with planners, boards, routines, and more. Say goodbye to scattered tasks and hello to seamless productivity with Dysperse."
        />
        <meta property="twitter:image" content="/meta.png" />
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Project",
              name: "Dysperse",
              url: "https://dysperse.com",
              logo: "https://assets.dysperse.com/v5/ios/128.png",
              sameAs: [
                "https://instagram.com/dysperse",
                "https://github.com/dysperse",
                "https://dysperse.com",
                "https://twitter.com/getdysperse",
              ],
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Dysperse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dysperse is an all-in-one unified productivity platform that helps users organize and streamline their lives. It offers features such as agendas, boards, habit tracking, and personalized recommendations to boost productivity and achieve goals more effectively. With its user-friendly interface and integration with popular tools, Dysperse aims to revolutionize the way people work and organize their daily tasks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is Dysperse preferred over other platforms?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "People may choose to use Dysperse over Todoist and Google Tasks for its comprehensive set of features, including agendas, boards, habit tracking, and personalized recommendations. Dysperse offers a unified platform that combines multiple productivity tools, making it convenient to manage tasks, projects, and personal belongings in one place, ultimately enhancing organization and efficiency. Additionally, Dysperse's integration with popular virtual assistants and its user-friendly interface make it a compelling choice for users seeking a powerful and accessible productivity solution",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is Dysperse preferred over other platforms?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "People may choose to use Dysperse over Todoist and Google Tasks for its comprehensive set of features, including agendas, boards, habit tracking, and personalized recommendations. Dysperse offers a unified platform that combines multiple productivity tools, making it convenient to manage tasks, projects, and personal belongings in one place, ultimately enhancing organization and efficiency. Additionally, Dysperse's integration with popular virtual assistants and its user-friendly interface make it a compelling choice for users seeking a powerful and accessible productivity solution",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why are some people obsessed with Dysperse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The comprehensive range of features, such as agendas, boards, and habit tracking, allows users to efficiently manage their tasks and achieve their goals. The personalized recommendations and user-friendly interface make Dysperse an engaging and effective tool, leading to a hidden obsession among those who value optimizing their productivity and streamlining their lives",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Dysperse secure?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Dysperse takes security seriously. It encrypts user data to ensure the protection and privacy of sensitive information. Additionally, Dysperse syncs data across devices securely, further enhancing the overall security of the platform. By implementing these measures, Dysperse aims to provide users with a secure environment to manage their tasks and personal information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Dysperse AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dysperse AI is an experimental feature which lets users break down big goals into smaller tasks with step-by-step instructions for easier accomplishment",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Dysperse be accessed on multiple devices?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Dysperse can be accessed on multiple devices, allowing users to sync their data across different platforms and access their tasks and information from wherever they are.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Dysperse's personal belongings tracker feature work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dysperse's personal belongings tracker feature allows users to keep track of their school supplies, books, and other belongings. Users can input and organize their items within the app, helping them avoid losing important items and ensuring they have everything they need for their classes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Dysperse available for free, or are there premium subscription options?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dysperse is described as an all-in-one free productivity platform. While it offers a wide range of features at no cost, there might be premium subscription options available that offer additional benefits or advanced features. The specific pricing details would need to be checked on Dysperse's official website or platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Dysperse integrate with virtual assistants like Siri or Google Assistant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Dysperse offers integration with popular virtual assistants. This means that users can leverage the capabilities of virtual assistants like Siri or Google Assistant to interact with Dysperse, manage tasks, and access information using voice commands or other assistant-specific features.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Dysperse have a mobile app, and is it available for both iOS and Android?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Dysperse has a mobile app that is available for both iOS and Android devices. Users can download the Dysperse app from the respective app stores to access the platform's features on their smartphones or tablets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What customization options are available in Dysperse, specifically regarding theme colors?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dysperse allows users to customize the app's theme colors according to their preferences. This feature enables users to personalize their Dysperse experience and create a visual environment that aligns with their aesthetic choices or organizational preferences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any collaboration features in Dysperse's board feature for group projects?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Dysperse's board feature is designed to facilitate collaboration on group projects. Users can create boards for different subjects or projects and invite classmates or team members to collaborate. This allows for efficient tracking of progress, sharing of resources, and seamless collaboration within the Dysperse platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Dysperse's coach feature provide personalized recommendations to improve productivity?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dysperse's coach feature offers personalized recommendations and tips to help users improve their productivity. It likely utilizes algorithms and data analysis to understand users' behavior, patterns, and goals. Based on this analysis, it provides tailored suggestions and strategies to optimize productivity and enhance overall performance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What technologies and programming languages were used to build Dysperse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dysperse is built using technologies such as TypeScript/JavaScript, React, React Native, and Electron. These technologies allow for the development of cross-platform applications that can run on various devices and provide a smooth and consistent user experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can users provide feedback and contribute to the development of Dysperse during its beta phase?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "During Dysperse's beta phase, users can provide feedback and contribute to its development by sharing their thoughts, experiences, and ideas within the Dysperse community. This can be done through the Dysperse platform's designated feedback channels, such as forums, support tickets, or other communication channels established by the Dysperse team.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
