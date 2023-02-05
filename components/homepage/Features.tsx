import { Box, Icon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";
import styles from "../../styles/features.module.scss";
import Image from "next/image";

export function Features({ useCase }): JSX.Element {
  const features = [
    "zen mode",
    useCase === "study groups"
      ? "personal belongings tracker"
      : useCase === "students"
      ? "dorm inventory"
      : "home inventory",
    "kanban boards",
    "goal-setting",
  ];

  const [tab, setTab] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      WheelGesturesPlugin(),
      Autoplay({ delay: 5000 }),
      AutoHeight({ destroyHeight: "auto" }),
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setTab(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(tab);
    }
  }, [tab]);

  return (
    <Box className="my-16" id="features">
      <Box className="text-center">
        <Typography variant="h4" className="text-center font-[700]">
          Meet <span className="text-green-600 underline">Dysperse.</span>
        </Typography>
        <Typography
          variant="h6"
          className="mt-2 inline-flex px-2 py-1 items-center text-gray-600 justify-center gap-2 cursor-pointer hover:bg-gray-100 rounded-xl active:bg-gray-200 mx-auto"
          onClick={() => {
            new Audio("/pronunciation.mp3").play();
          }}
        >
          <Icon>volume_up</Icon>
          Pronounced /də°spərs/
        </Typography>
      </Box>
      <Typography className="text-center text-gray-500 mt-2" sx={{ my: 2 }}>
        Not just <i>another</i> to-do list app...
      </Typography>
      <Box
        className="flex overflow-scroll sm:justify-center mx-auto embla max-w-3xl w-full"
        sx={{
          width: "auto!important",
          overflowX: "auto!important",
        }}
      >
        {features.map((feature) => (
          <Box
            className="flex flex-col gap-2 items-center border-b-2 p-2 hover:bg-gray-200 hover:text-gray-900 text-gray-600 text-lg px-4 rounded-t-sm hover:border-gray-300 cursor-pointer select-none active:bg-gray-300 active:text-black active:border-gray-400"
            onClick={() => {
              setTab(features.indexOf(feature));
            }}
            sx={{
              ...(tab === features.indexOf(feature) && {
                fontWeight: "600!important",
                color: "black!important",
                borderColor: "black!important",
              }),
              whiteSpace: "nowrap",
            }}
          >
            {feature}
          </Box>
        ))}
      </Box>
      <div ref={emblaRef} className="mx-auto mt-10 embla max-w-md sm:max-w-5xl">
        <div className="embla__container">
          <div className="embla__slide feature-slide flex items-center">
            <Box className="w-full flex-grow">
              <h1 className={styles.featureTitle}>
                Minimalism &#8212; at its best.
              </h1>
              {[
                "Customize your theme colors",
                "Move & reorder widgets",
                "Brag about your daily streak",
                "Set daily goals & achieve them",
                <b>Access from anywhere, anytime, on any device!</b>,
                "Allow for easy searching and filtering",
                "View your progress & get encouraged to finish tasks",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="feature-img">
              <Image
                src="/screenshots/zen.png"
                alt="Zen"
                width={1755}
                height={3120}
                placeholder="blur"
                blurDataURL="data:image/png;base64,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"
              />
            </Box>
          </div>
          <div className="embla__slide feature-slide">
            <Box className="w-full">
              <h1 className={styles.featureTitle}>Track your belongings.</h1>
              {[
                "Sync your " +
                  (useCase == "study groups"
                    ? "personal belongings"
                    : useCase == "students"
                    ? "dorm inventory"
                    : "home inventory") +
                  " inventory with your phone.",
                "Organize items into " +
                  (useCase == "study groups" ? "containers" : "rooms"),
                "Add notes and photos to each item",
                "Scan items to quickly build up your inventory",
                "Categorize items by type",
                "Quickly find items by searching/filtering for them",
              ].map((feature) => (
                <span className="feature-sub">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="feature-img">
              <picture>
                <Image
                  src="/screenshots/inventory.png"
                  alt="image"
                  className="feature-img"
                  blurDataURL="data:image/png;base64,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"
                  placeholder="blur"
                  width={1755}
                  height={3120}
                />
              </picture>
            </Box>
          </div>
          <div className="embla__slide feature-slide flex items-center">
            <Box className="w-full flex-grow">
              <h1 className={styles.featureTitle}>
                {useCase == "study groups" || useCase == "students"
                  ? "Never miss an assignment again."
                  : "Master your tasks."}
              </h1>
              {[
                "Create kanban boards to organize your tasks",
                "Customize columns with emojis & colors",
                "Attach notes & photos to tasks",
                "Set due dates to tasks",
                "Sync your to-do list to Canvas LMS",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="feature-img">
              <Image
                src={"/screenshots/tasks.png"}
                alt="image"
                className="feature-img"
                width={1755}
                height={3120}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABeCAIAAAAMt8u+AAAN1klEQVRogbVb63rbqhJdMyDJt6Td7X7/h2wTWxIwc34MICRbTtLuw5c4ioxgMfcZAamqiIQQpmm6Xq9vb2+/f//+9evX29vb2+/fb+/vb29v7+/v1+v1er3ebrfb7TbPcwghpSQiAAgEQnsBQJtfImJ2nfdd3x0Oh+PxeDqdTqfT+XQ6Xy7n8/nlcrm8vLy+vr6+vl4ul9PpdDgc+r5nZm/4YoyGL4P7/ft6vU7zLCLOub7vY4y2BhUNcxin0SCqKhEZCKxbgQdm9p2XfmDHROS977uu7zrnvaqGEK63G8ogROSc894754jIq2pKaZ7n2+32/v7+9vb29vZ2G8eYEjPbOoZh6PveOSci8zyP06iqMcYYo6pWcDbDAs7+EJxzzjExdV13PB5fXl5eX19Pp9MwDAZCRMZxJCJmds51Xdd1nUHM+EII4zgaE6dpEpHOd4fDoes6Zk4xXm+34/HovQegqqpKoDnMIrKln11ogUfkvTscDi+Xy/fv33/+/Pnjx4/v37+fTqe+6xQIIdg6Qwi3220YhsPhYBTx3ntj7jzP8zxP0zQXng7DcDwej8dj13Uicrvd7NqIPwzD+/u7db7jL4EWfEzkO388Hl8uL//88/3ff//9+fPnt2/fTqeT9z6lZDJtRDERmqbJQIvIIn8hBBMpAMaIy+VyuVyGYVDVaZqM133fH4/HX79+maK0+DJEanUExNR5fzgcLpfLt2/ffvz48c8//7y8vByPR2YOIZgeAKgQKxJVzfxNKaWYRERVHbOBOJ/Pl8vlcDgAmOe57/uu64ZhuFwu7+/vtkrTj7YZJbUhpveu74fT6Xi5XF5fXw3cMAxENM+zyV9KyQhm12YcMv1UlkZExNx1namFNdMpa8MwnM9nA1f1l5mZuYW4aC/IOfZdN/T9sTSTLRvWTIfdsQVXMJl+YrdUsjlYz2e8M7UCYMIXYzRwxbyxc255hAhaKYhqMrrSrLOZHnu2Pl71z5pX1eUGtB23LiUrLJH3nplNq1pwFZ+1dgS7sLnbNRhbcdfskQwH8Ghkxe5p1sCtya0TOOdas1xvrkjYzFQfr5+6pm771WpKVV9w6WogWhFmM2jbs3arPR/S7/5BVV1oeW8+S/MV1wZiKxn3i27pZ9Ns5LXtsyFh2/JTrW6tmy8Tru4uprZQqE72sN0v4P7b+5vZXOxBW+HbfEkbMdhOvOHUdqZmxier2hL+Gf0AakE2ovaQKhtZrFAqvetnXcbDdS4P7qzEU9O3jT6MKmbKjUjLOsqlQou2l2mYmFhVTcfRzPoB93fI7O+/qMgsggohGJQafJrrz+CaaagYaqfO+lbB3ejWA9yPwTf83UCsKEMIywSL68/23NwYFXvk1BlqFlb+QDBW11jGW+Fbkb2dtDGK2bUUTtpYQtmcG2EJTEZUKhYUW3lvLfZDidSm25p+zXKyV9+oITKKSkLSPFIWHwKYyBFx+WmUZk/4dgmcGVPw6epPQdA0VQWBONNPIARAKWsIlc5MxEy8Wls74MaOrjposRuZL8X/YtVlBav6rsxfw0dKYFYRsKoYCYnYmccpj9DivVBJ2F5sKYcMq6XSGl/x0FwiIguKskslgAhsA4mqShNRMBETMzvPznEJltakeoiMmnxlS8h7/aWiikY8w1fl3eTPuFpVGIXDGSKxY8dVAO+hPLrT2qpKyBK/rJ+0cXndGi2AUtFDyvJS7TMX1cCfNd3+99j+oRG+GuuuzKhmmgFoTMmiFOZQ/x7iDr4FZrYWFd4SaBvZCGt1rXLwR20VBDT4Vv6nCKhaalLYaNF/jfhRbRs0I7wzyF8Ctrm2we/ol0MDTaJJNCaJSaobKvhKZaiJliuyL0Fswo7mqUY2tvgUasZDVAxcjEkVRGaackyjIloyS4tWUIPhR+bjIehtgtIur3S/lz9zixAxLEY/W5FiIV+qgcnKDa7x7bqKB2CBZpB6e2tflq+MiiKiSioMApSA6slaNDXe2XC5OqFnyBaADZHKyP5uMrMWNcdsnm3yOgCqS0yP/WzSBOBjEjYLe0y/xULYoi2eY3ZMjtl8FYHARkOornhxn921pH2I7CGxN338Ctw6CnGOvGPvHDumxhyzsLKUiHWxy3fgCkP228K9nQ6b+MA+stA4ZufYOXLM2ffaMKyqbi8k32RM/MAPf6E1+dtCP/MbOdx0zMztEtW67kWcrQ7Suv0Vvjx3mWLhd0b2PACmkoVtRaq9+ff4gK0oFG+3H6CX6Rv6f8ny1Wke5kePuq7yIzNsj1ZhJrXWWRTYlmD+vu3EL00YtTFsZe4l1aLFi7Q6/dmWA/DVtEv7wLK3XGrAtR0Ktf6CYE9Eey8+Xf40yrcboayU9D/i7FN8aPT3Yx+1vqeKuzxyp+mKu1/C16DMLNztAy1RzyZ9UNA9yWsmVME9g/gM3zImgbTNP+6ksi23me0mK8tkEVl0PNcFao3pA4hP6VfCfGgtUGxH2SsBUQ2Bt2zWQjkAAggemb3H+Na1mrI0tTyk3Kidtm5dG+IWuWAC+JF42FCyyN8Owuf0q2k4VGo9qx3pMT6CJcHMYOJ7TakkXF98GV8ZjLQUDNAgJKwGLfVK0vz+kuiJYtLy7FM1f4qvBMyLNJVywaPOSkr1qU0qS/UvKWo35ZoV7aHcx5cjl2phGFBlgdSYX+vEFvKt8NDys5a/kp4pgwTEayH5PD40boEZqlCxqq1xclUkoMXEtBF1jbruhwYBYBCB+AmLV/jaXkscwsxECig5pVIqvh+p3KyBKbcQt8hMSqSIwW4a8DH9lovPvS9oHt2LmQuLsxg8g/CB/i4g1mV0rDTw2bNUjGiDdYmyYeXEfYy7+FbFexXUQBCrj9UjzTyaZTIXGYrToxI7fjbG+cA+Z+chNX7RxunXXiuIMBFcwoAGXI25t+v6Y/+moqKW7Vby6dYAbiIHyuEB8h0LrvN/dnG/ys/g2zazJNW/taHRPbTW+bY2XMlKhOaLbXHrdwx/hE93/9kg+khNSpc/i6r342cUO0BLdguqAtbM+CBg2JDHfGQusn4pAfig/owlU0fjz7Aix3q6B+WU4lFqwPpf4CvzGMAi0Nv4GcCKe0t5fCfP+2J2/DS+/+S9IgdLYHoHb43pv+HvYteK3q5C5w3CJmpekeov2z6+rKKqqmTOQ1ca24hZ1pbGaX0F2VP138OXXdti/6p9rhiLxpRMTXM1Qh+y9w/bZyrXudHuP//Htke/xUpk61KZtzEd5fce8OdKCH+Ir6LJdV1qcvQmOlrYbe9cSYspYgItGyT+GOjn7Z/emwhSAinEXviXTJEIxMpMjkEMJmCdya2KHX+Mb0/GVq5dISARpIgUkQQqCiLHcF69h/NQxuYdXRu8fASwwXdXuihG71Fx16YyyqWEEDBPCAEiIMB5dB36AR3Ue0uF6LNFrT18W3gAajakjWfTEoACqpQSYsA84XbDPCFFgNR3OAxZfNk+s3y0b+0eUuVz+BZjV6/Kq3yibI9VIQkpIUbMM6YbxhExgghdBwDOwzskp3dv/A3i8wzrI/o1YIuAa/NbqjOiKgkpIiaEYPiICCkiJU0CEaioEDHj64rc4tMHVyUzpfLCrcl8bJPJsvMJzGAGkW6qvHU9Tfsk0I/qp8ievmQ5WSrtDTFSUkl5YvboOrADEbyH93Zt26DuK3zFZy7tc/j2RIIWMqiISkJMmqKGiBigCnboBngFE5yH7+EYAKmSKomAa6mlDqR18/JSvVsD8Es9IH/qdlkrc6UQ0ZQ0BA1BQtAYkRJUQES+AxPYwbE6D3YAkSqLEBGXilstkNgr+hbiJtck2x+xqUXklLc8Kss2nMLcFDUEmSaZJw0RqmAi09bMWVZiZUbZmdJIbpmi2Z9pu+1LvWEV5npqG0hVJUmIIYQwhxDm2TmnzmWTIIIUZQ4yjXK7pXHSEACg89yDvCNiECuxmkuUJOtXsdWyGDg712GnKfKGeUKLyFPe15V3nKlqlDhP0+1267xn5iTJe8/EAEhEY9RpSterXK/pdtMYAKK+p0NiVVJARJml1l/KJuq8D4mo7v+PMdqhGDv/YadUqNk0V/C5ZXc6AHvMClYppWk8+K5zbH5eEaNMk9xucr3KOEoIIOK+pxhZhFKE7yo+tdMGLT6gHk+wQzt2rmgcxxRTRWIb/Zk5H3KoR36YWUTGaUoiIcZpnodh6Lxn59iCqJR0DjKOervJNGmKAFGYOUaKkaYB3iuzFnzU7OPKTruh3zRN4zjWoyS+yzv6bGsfE3suR5LswEfXdeM42gmWaZrG8dZ1vffe5ff0iiSIUedZ5llD0JSIQMHTHGieqOvhnJrVK2832+3QVVXvD+0YpgrDOUdMC/3sYNLhcBjHMcxziHGe53EcjTF5H4GZm5Q0RsSoKUHEIMDPNHXkHJi1GBJtjEONsluIphO20dB7b6fj6uGoFX8Ph8P5fJ7n2c7ZKGDHiySlWMvcxXxBBMUimBFGSgQgpTaPby3Zxt7XZ42BNvv5fD6dTnbAJp9/M8ob/U6nk4EjIu+9iYU0OBYTWC19sd5UC/bZ2zQgd3L1dmo7F/fy8nI+nxf+VvtshwSl7PqyQzzTOM1hbo1nCbKW14GbafGoldrSAs4aZ9b1w2Gox7GMv3Y6acFn68hYmfu+P51O9RDU2gWtEH6yVeFrywwb1Twej3Yyrz2gtOxvsj1yGWvfHw6H1qzbFokVFZv2EO69zFW21onM2pl1s/NrlbP2yP8A7JuI9do56QYAAAAASUVORK5CYII="
              />
            </Box>
          </div>
          <div className="embla__slide feature-slide flex items-center">
            <Box className="w-full flex-grow">
              <h1 className={styles.featureTitle}>Achieve the impossible.</h1>
              {[
                "Create goals and track your progress",
                "Prepare for exams, interviews, and more",
                "Break down your goals into smaller tasks",
                "Get rid of bad habits and create new ones",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="feature-img">
              <Image
                width={1755}
                height={3120}
                placeholder="blur"
                alt="Goals"
                blurDataURL="data:image/png;base64,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"
                src="/screenshots/goals.png"
                className="feature-img"
              />
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}
