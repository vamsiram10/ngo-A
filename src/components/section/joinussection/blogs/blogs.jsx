import React, { useState } from "react";

const blogData = [
  {
    id: "blog-krishna",
    title:
      "Why is Indian society so far from being Inclusive? Will there ever be a safe place for the LGBTQ+ Community? (By Krishna)",
    author: "Krishna",
    date: "July 2026",
    category: "Community Impact & Legal Analysis",
    readTime: "12 min read",
    summary:
      "An in-depth exploration into the historical context, legal progression, global comparisons, Grindr extortion cases, and structural obstacles faced by India's LGBTQ+ community.",

    content: `
      <h3 class="text-xl font-bold text-pink-400 mt-6 mb-2">
        ● INTRODUCTION
      </h3>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Today, if we talk about this issue, India appears to be progressing on
        paper. After the Supreme Court's landmark judgment in 2018 striking
        down Section 377 of the Indian Penal Code, same-sex relationships were
        decriminalized, giving LGBTQ+ individuals the freedom to live without
        being treated as criminals.

        However, legal recognition alone is not enough. Society has still not
        fully accepted the LGBTQ+ community. Inclusivity remains a distant goal.
        In many places, even the most basic human rights are denied.

        Workplace discrimination remains widespread. Studies reveal that nearly
        70% of LGBTQ+ employees in India have experienced non-inclusive
        behaviour, including homophobic jokes, exclusion, harassment, or denial
        of opportunities. This highlights the gap between legal progress and
        social acceptance.

        While India embraces modernization and artificial intelligence, many
        people continue to hold outdated views toward LGBTQ+ individuals despite
        references to gender diversity existing in ancient Indian history.

        Examples include Shikhandi from the Mahabharata, who is often described
        as being born female but living as male, and Bahuchara Mata, the deity
        worshipped by the hijra community.

        Despite this historical recognition, discrimination continues today.
        There is no official nationwide count of LGBTQ+ discrimination because
        many incidents go unreported due to fear, stigma, and social pressure.

        Long before modern LGBTQ+ identities became widely discussed, India had
        the hijra community, which held an important cultural and religious
        place despite also facing discrimination.

        Unfortunately, growing hate speech, misinformation, and the darker side
        of social media have contributed significantly to increasing prejudice
        against LGBTQ+ individuals.
      </p>

      <h3 class="text-xl font-bold text-pink-400 mt-8 mb-2">
        ● HISTORY
      </h3>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Before discussing the present situation, it is important to understand
        the historical background of LGBTQ+ identities in India.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        In ancient India there were no legal prohibitions against homosexuality
        or transgender identities for the general population before the colonial
        era. Certain religious codes regulated sexual behaviour among monks and
        priests, while Abrahamic religions introduced stricter prohibitions
        regarding homosexuality.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Hindu traditions describe the existence of a "third gender", which has
        been documented in ancient Hindu and Buddhist texts. This concept is
        found throughout South Asia and recognizes gender diversity beyond the
        male–female binary.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        The <em>Nāradasmṛti</em> and the <em>Sushruta Samhita</em> discuss
        homosexuality as an innate characteristic and describe several gender
        identities. The famous <em>Kama Sutra</em> also discusses homosexual
        relationships, lesbians, bisexual individuals, transgender people, and
        intersex people.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        The Khajuraho temples further demonstrate that same-sex intimacy and
        gender diversity were acknowledged in ancient Indian art and culture.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        During British colonial rule, attitudes changed dramatically. Section
        377 of the Indian Penal Code criminalized consensual same-sex
        relationships and remained in force for over 150 years. Many scholars
        argue that this law reflected Victorian morality rather than traditional
        Indian culture.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Colonial authorities also targeted the hijra community. In 1871 they
        were labelled a "criminal tribe", resulting in systematic surveillance,
        discrimination, and exclusion that continued long after independence.
      </p>

      <h3 class="text-xl font-bold text-pink-400 mt-8 mb-2">
        ● THE LEGAL PROGRESSION
      </h3>

      <p class="mb-4 text-gray-300 leading-relaxed">
        The legal recognition of LGBTQ+ rights in India has been a long and
        difficult journey. Much of the progress made in ancient India was
        interrupted during British colonial rule, when homosexuality was
        criminalized under Section 377 of the Indian Penal Code.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        A major turning point came in 2018 with the landmark case
        <strong>Navtej Singh Johar v. Union of India</strong>. The Supreme Court
        declared Section 377 unconstitutional insofar as it criminalized
        consensual same-sex relationships between adults. The Court held that
        the law violated the fundamental rights to dignity, privacy, equality,
        and personal autonomy.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Justice Indu Malhotra famously observed that
        <em>"history owes an apology to the LGBTQ+ community."</em>
        The judgment represented one of the most significant constitutional
        victories for LGBTQ+ rights in India.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        However, while same-sex relationships are no longer criminalized,
        LGBTQ+ individuals still lack marriage equality, equal adoption rights,
        and comprehensive anti-discrimination protections in employment,
        housing, healthcare, and public services.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Even before the 2018 judgment, the Supreme Court had taken an important
        step in
        <strong>NALSA v. Union of India (2014)</strong>, recognizing transgender
        persons as a legally recognized third gender and affirming their right
        to self-identify.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Following this decision, Parliament enacted the
        <strong>Transgender Persons (Protection of Rights) Act, 2019</strong>.
        The Act introduced legal identity certificates, prohibited certain
        forms of discrimination, and directed governments to establish welfare
        measures for transgender persons.
      </p>

      <ul class="list-disc list-inside mb-4 text-gray-300 space-y-2 pl-2">
        <li>
          Legal recognition of self-identified gender through certificates of
          identity.
        </li>
        <li>
          Government responsibility to provide welfare schemes and social
          support.
        </li>
        <li>
          Access to healthcare, including gender-affirming medical services.
        </li>
        <li>
          Formation of the National Council for Transgender Persons to advise
          the government on policy implementation.
        </li>
      </ul>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Despite these developments, many activists criticized the Act for not
        fully implementing the recommendations made in the NALSA judgment,
        particularly regarding reservations in education and employment and the
        complete recognition of self-identification without procedural hurdles.
      </p>

      <h3 class="text-xl font-bold text-pink-400 mt-8 mb-2">
        ● GLOBAL PROGRESSION vs INDIAN DELAYS
      </h3>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Around the world, LGBTQ+ rights have progressed rapidly over the past
        two decades.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        The Netherlands became the first country to legalize same-sex marriage
        in 2001, setting a precedent that would later be followed by more than
        thirty countries.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        In the United States, the Supreme Court decriminalized consensual
        same-sex relationships through
        <strong>Lawrence v. Texas (2003)</strong>, and later legalized
        same-sex marriage nationwide in
        <strong>Obergefell v. Hodges (2015)</strong>.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        These decisions reflected changing public opinion, strong judicial
        interpretation, and decades of activism. By 2023, over 1.3 billion
        people worldwide lived in countries recognizing same-sex marriage.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        India's legal journey has certainly progressed, but much more slowly.
        Although transgender persons were recognized as a third gender in 2014
        and consensual same-sex relationships were decriminalized in 2018,
        meaningful legal protections remain limited.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Justice D. Y. Chandrachud observed during the Navtej Singh Johar case
        that colonial laws had become weapons of harassment rather than justice.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        The reasons India continues to lag include deep-rooted social,
        political, cultural, and institutional challenges.
      </p>

      <ul class="list-disc list-inside mb-4 text-gray-300 space-y-2 pl-2">
        <li>
          <strong>Caste hierarchies and honour-based violence</strong> continue
          to influence family decisions and social acceptance.
        </li>

        <li>
          <strong>Intersectionality</strong> means Dalit LGBTQ+ individuals
          often face discrimination based on both caste and sexuality.
        </li>

        <li>
          <strong>Religious conservatism</strong> across multiple faiths often
          influences public opinion and political discourse.
        </li>

        <li>
          <strong>Police harassment</strong> and misuse of vague public-order
          laws continue despite Section 377 being read down.
        </li>

        <li>
          <strong>Legislative inaction</strong> has delayed comprehensive
          anti-discrimination protections.
        </li>
      </ul>

      <h3 class="text-xl font-bold text-pink-400 mt-8 mb-2">
        ● Timeline of Grindr-Related Cases in India
      </h3>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Between 2023 and 2025, several organized criminal groups targeted gay
        men through dating applications such as Grindr and Blued. Victims were
        lured into meetings before being robbed, assaulted, blackmailed, or
        extorted.
      </p>

      <ul class="list-disc list-inside mb-4 text-gray-300 space-y-2 pl-2">
        <li><strong>August 2023 (Kanpur):</strong> Students arrested for blackmailing victims using fake dating profiles.</li>

        <li><strong>August 2024 (Madras High Court):</strong> Concerns raised over the misuse of Grindr for robbery and extortion.</li>

        <li><strong>August–September 2024 (Surat & Noida):</strong> Multiple gangs arrested for targeting LGBTQ+ individuals.</li>

        <li><strong>April 2025 (Chennai):</strong> Seven-member gang arrested after allegedly targeting more than thirty victims.</li>

        <li><strong>April 2025:</strong> Investigations linked misuse of dating platforms to methamphetamine trafficking.</li>

        <li><strong>May 2025 (Greater Noida):</strong> Four men arrested for armed extortion targeting queer individuals.</li>

      </ul>

      <h3 class="text-xl font-bold text-pink-400 mt-8 mb-2">
        ● WHY INDIA LAGS IN INCLUSIVITY
      </h3>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Although legal reforms have brought important changes, genuine
        inclusivity requires much more than changes to legislation. Surveys
        indicate that a significant proportion of LGBTQ+ individuals continue
        to experience discrimination within their own families, workplaces,
        schools, and communities.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Many queer youth still face rejection at home, forced heterosexual
        marriages, emotional abuse, and social isolation. Transgender persons
        continue to face disproportionate levels of poverty, unemployment, and
        discrimination in education and healthcare.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Even today, many LGBTQ+ individuals avoid reporting violence or
        harassment because they fear social stigma, police inaction, or being
        outed to their families.
      </p>

      <h3 class="text-xl font-bold text-pink-400 mt-8 mb-2">
        ● SOLUTION PATHWAY
      </h3>

      <ul class="list-disc list-inside mb-4 text-gray-300 space-y-2 pl-2">
        <li>
          Enact comprehensive anti-discrimination laws covering employment,
          housing, education, healthcare, and public services.
        </li>

        <li>
          Provide full legal recognition of same-sex marriage and equal
          adoption rights.
        </li>

        <li>
          Introduce age-appropriate gender and sexuality education within
          schools and colleges to reduce prejudice from an early age.
        </li>

        <li>
          Design more inclusive public infrastructure, including gender-neutral
          washrooms and accessible public services.
        </li>

        <li>
          Strengthen safety measures and verification systems on dating
          platforms to reduce the risk of extortion, blackmail, and violent
          crimes targeting LGBTQ+ individuals.
        </li>

        <li>
          Expand mental health support, community outreach programs, and legal
          aid services for LGBTQ+ persons across India.
        </li>
      </ul>

      <h3 class="text-xl font-bold text-pink-400 mt-8 mb-2">
        ● CONCLUSION
      </h3>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Decriminalization marked the beginning—not the end—of India's journey
        toward equality. Laws can change overnight, but changing mindsets takes
        time, education, empathy, and consistent social effort.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        A truly inclusive society is one where every individual, regardless of
        gender identity or sexual orientation, can live safely, openly, and
        with dignity. Whether India becomes such a society depends not only on
        governments and courts, but also on the willingness of its people to
        embrace diversity and reject discrimination.
      </p>

      <div class="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-400">
        <p class="font-semibold mb-2">
          References & Research Sources:
        </p>

        <p class="break-all">
          Navtej Singh Johar v. Union of India (2018), NALSA v. Union of India
          (2014), Transgender Persons (Protection of Rights) Act, 2019,
          IPC Section 377, Times of India, India Today, Pew Research Center,
          Varta Gender Research, Vice News, Saathii.
        </p>
      </div>
    `,
  },

  {
    id: "blog-gayathri",
    title:
      "My Heart Aches: Are We Truly Building a Home for Everyone in India?",
    author: "K. Gayathri Devi",
    date: "July 2026",
    category: "Personal Reflection & Society",
    readTime: "7 min read",

    summary:
      "A deeply emotional reflection on societal prejudice, the legal history of Section 377, and the human desire for safe spaces and authentic love.",

    content: `

      <p class="mb-4 text-gray-300 leading-relaxed">
        Sometimes, a question sits heavily on my heart, refusing to leave:
        Why does it feel like our beautiful India—the country I proudly call
        home—is still so far from becoming truly inclusive?
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Especially for our LGBTQIA+ brothers and sisters, the journey toward
        acceptance is still filled with fear, judgment, and uncertainty. We
        celebrate India's diversity every day, yet many people still cannot
        openly express who they are without worrying about discrimination,
        rejection, or violence.
      </p>

      <blockquote class="border-l-4 border-pink-500 pl-4 my-6 text-gray-300 italic bg-gray-800/40 py-3 rounded-r-lg">
        "The greatest fear in the world is of the opinions of others, and the
        moment you become unafraid of the crowd, you are no longer a sheep;
        you become a lion. A great roar rises in your heart—the roar of
        freedom."
        <br /><br />
        — Osho
      </blockquote>

      <p class="mb-4 text-gray-300 leading-relaxed">
        This quote resonates deeply with me whenever I think about the courage
        it takes for LGBTQIA+ individuals simply to exist in a society where
        prejudice and conservatism often outweigh empathy and understanding.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Imagine an old family home that everyone loves. We keep renovating it,
        repainting the walls, repairing the roof, and changing the rules,
        hoping everyone will finally feel welcome. Yet we keep forgetting the
        original blueprint—the values of kindness, acceptance, and equality.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Laws like Section 377 once criminalized consensual same-sex
        relationships, making love itself appear illegal. Although those laws
        have now changed, the deeper challenge lies in changing hearts and
        minds.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        The legal journey toward equality has been long and difficult. In 2009,
        the Delhi High Court delivered a historic judgment in
        <em>Naz Foundation v. Government of NCT of Delhi</em>, holding that
        consensual same-sex relationships between adults should not be treated
        as crimes.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Unfortunately, that hope was short-lived. In 2013, the Supreme Court,
        in <em>Suresh Kumar Koushal v. Naz Foundation</em>, overturned the
        Delhi High Court's decision and effectively restored Section 377.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Finally, on September 6, 2018, justice prevailed. In
        <strong>Navtej Singh Johar v. Union of India</strong>, the Supreme Court
        struck down the criminalization of consensual same-sex relationships
        between adults. It was more than a legal victory—it was recognition
        that every person deserves dignity, equality, privacy, and the freedom
        to love.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        When Section 377 was read down, it felt as though a massive wall had
        finally been broken. Yet, breaking one wall does not rebuild an entire
        home. The invisible barriers of prejudice, stereotypes, and social
        conditioning still remain deeply rooted in our communities.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        My heart aches whenever I think about the horrifying crimes connected
        with dating applications such as Grindr. Imagine searching for
        friendship, companionship, or love only to become the victim of
        violence, robbery, extortion, or humiliation.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        These incidents remind us that legal reforms alone cannot guarantee
        safety. Acceptance, compassion, and education are equally important if
        we hope to build a society where everyone can live without fear.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        Law often appears intimidating to ordinary people because it is filled
        with complex language and procedures. Yet behind every important legal
        judgment are real human lives. For decades, Section 377 labeled love as
        a crime, causing countless people to hide their identities and live in
        fear.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        The 2018 judgment brought hope, but the struggle for dignity,
        recognition, and equal rights continues. Social acceptance cannot be
        achieved by court judgments alone—it requires every individual to
        challenge prejudice in everyday life.
      </p>

      <p class="mb-4 text-gray-300 leading-relaxed">
        During every Pride Month, I hope for an India where everyone can love
        openly, express themselves freely, and live without hiding behind masks
        created by fear or discrimination.
      </p>

      <blockquote class="border-l-4 border-pink-500 pl-4 my-6 text-gray-300 italic bg-gray-800/40 py-3 rounded-r-lg">
        "If it is true that there are as many minds as there are heads, then
        there are as many kinds of love as there are hearts."
        <br /><br />
        — Leo Tolstoy, <em>Anna Karenina</em>
      </blockquote>

      <div class="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-400">

        <p class="font-semibold mb-2">
          Sources Referenced:
        </p>

        <ul class="list-disc list-inside space-y-1">

          <li>
            Navtej Singh Johar v. Union of India (2018)
          </li>

          <li>
            Suresh Kumar Koushal v. Naz Foundation (2013)
          </li>

          <li>
            Naz Foundation v. Government of NCT of Delhi (2009)
          </li>

        </ul>

      </div>

    `,
  },

  {
  id: "blog-drishti",
  title: "More than Two Genders, More than One Fear: A Reality Check For Indian Youth",
  author: "Drishti Wacchani",
  date: "July 2026",
  category: "Gender Identity & Society",
  readTime: "8 min read",

  summary:
    "An exploration of gender identity, masculinity, and homophobia among Indian youth, examining how rigid gender norms shape schools, families, and society while highlighting stories of resilience and the importance of education, empathy, and inclusion.",

  content: `

    <p class="mb-4 text-gray-300 leading-relaxed">
      Who decides what a boy should be like? Should he be loud and aggressive,
      love sports, wear blue, and never cry? In India, these expectations are
      often treated as unquestionable truths rather than social constructs.
      Gender norms are passed down like family heirlooms—silent but strict—
      shaping our schools, homes, friendships, and even our silences.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      For today's Indian youth, especially young boys, these expectations can
      become invisible cages. Despite increasing LGBTQIA+ visibility and legal
      reforms, gender non-conformity is still viewed by many as a challenge to
      traditional masculinity. Those who do not "fit in" often face ridicule,
      exclusion, bullying, and isolation.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Even today, many boys grow up believing that anything perceived as "too
      feminine" makes them weak. Showing emotion, enjoying dance, wearing pink,
      painting nails, or expressing themselves differently can quickly become
      reasons for mockery. Across schools and colleges, words like "gay" are
      still commonly used as insults—not always from hatred, but often from
      fear, confusion, peer pressure, and anxiety about appearing "less
      masculine."
    </p>

    <blockquote class="border-l-4 border-pink-500 pl-4 my-6 text-gray-300 italic bg-gray-800/40 py-3 rounded-r-lg">
      "Often, the loudest voices of homophobia come from those most afraid of
      being seen as different themselves."
    </blockquote>

    <p class="mb-4 text-gray-300 leading-relaxed">
      A 2021 study by Ashoka University's Centre for Studies in Gender and
      Sexuality found that nearly 60% of queer-identifying adolescents in urban
      Indian schools reported experiencing bullying, with male classmates
      frequently being the primary perpetrators. Yet the bullying is not
      limited to queer students. Even heterosexual boys who enjoy poetry,
      express emotion, or simply reject rigid masculine stereotypes often find
      themselves labeled with slurs and subjected to ridicule.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Consider Arjun, a 16-year-old from Pune, who loved dancing and wore
      eyeliner during his school's annual function. Soon afterward, classmates
      began calling him derogatory names while even a teacher laughed along.
      Eventually, Arjun stopped dancing—not because his passion disappeared,
      but because the environment around him made continuing feel impossible.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      This policing of masculinity begins early and is reinforced throughout
      childhood. According to a 2019 UNESCO and Sahodaran report, more than half
      of LGBTQ+ students in India had considered dropping out of school because
      of bullying, harassment, and discrimination. Much of this abuse came not
      from strangers, but from classmates seeking acceptance within rigid peer
      groups.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Public figures remind us that success does not erase the scars left by
      exclusion. Drag performer and LGBTQIA+ advocate <strong>Sushant
      Divgikar</strong>, popularly known as <em>Rani Ko-HE-Nur</em>, has openly
      spoken about being bullied throughout school for being perceived as
      effeminate. Activist <strong>Harish Iyer</strong> has similarly shared
      experiences of harassment during his childhood simply for being himself.
    </p>

    <blockquote class="border-l-4 border-pink-500 pl-4 my-6 text-gray-300 italic bg-gray-800/40 py-3 rounded-r-lg">
      "If boys stopped being afraid of pink, the world would be a safer place
      for everyone."
      <br /><br />
      — Harish Iyer
    </blockquote>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Why are so many boys homophobic? Often, the answer lies not in hatred but
      in fear-based masculinity. Many young men fear losing social acceptance,
      being labeled differently, or appearing vulnerable. Homophobia becomes a
      defense mechanism—a way of distancing themselves from anything that
      challenges traditional ideas of masculinity.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      These attitudes continue into college campuses. Some students hesitate to
      attend Pride events or queer film screenings despite privately supporting
      LGBTQIA+ rights, simply because they fear judgment from their peers.
      Although institutions such as IIT Delhi's Queer Collective have created
      safer spaces, many campuses still reflect deeply entrenched masculine
      cultures.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Families and educational institutions also play an important role.
      Conversations about gender often remain limited to rigid male-female
      binaries, while comprehensive gender education is either absent or taught
      with discomfort. Even efforts toward inclusive education have sometimes
      faced public backlash, reflecting how sensitive discussions around gender
      diversity continue to be.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Popular culture reflects this ongoing transition. Films such as
      <em>Shubh Mangal Zyada Saavdhan</em> and <em>Aligarh</em> have opened
      conversations around queer identities, while digital creators including
      Durga Gawde and Rangoli Boi continue challenging stereotypes online.
      However, the persistent trolling they face reveals how deeply social
      prejudice still exists.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Encouragingly, meaningful change is happening through advocacy and
      community initiatives. The Keshav Suri Foundation's #PureLove campaign
      promotes inclusive workplaces and Pride celebrations. Prince Manvendra
      Singh Gohil has transformed personal adversity into advocacy by
      establishing LGBTQ+ support initiatives in Gujarat. Organizations such as
      Naz Foundation, Sangama, and SAATHII continue educating young people
      across India about gender diversity and inclusion.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      Social media, too, has quietly become a space of discovery. Many young
      people are exploring stories shared by queer creators, learning about
      gender identities, and questioning stereotypes in private long before
      they feel comfortable discussing these topics openly. These small moments
      of curiosity often become the first steps toward empathy.
    </p>

    <p class="mb-4 text-gray-300 leading-relaxed">
      The journey toward acceptance remains unfinished. Boys are still mocked
      for expressing emotion. Parents still worry when children break gender
      stereotypes. Yet every honest conversation, every inclusive classroom,
      every supportive friendship, and every young person who chooses empathy
      over ridicule moves society closer to a future where gender becomes a
      canvas for self-expression rather than a cage of expectations.
    </p>

    <blockquote class="border-l-4 border-pink-500 pl-4 my-6 text-gray-300 italic bg-gray-800/40 py-3 rounded-r-lg">
      "Perhaps the question isn't just who decides what a boy should be like—
      but when will we finally let him decide for himself?"
    </blockquote>

    <div class="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-400">

      <p class="font-semibold mb-2">
        Sources Referenced:
      </p>

      <ul class="list-disc list-inside space-y-1">

        <li>
          Ashoka University – Centre for Studies in Gender and Sexuality
        </li>

        <li>
          UNESCO & Sahodaran (2019). <em>From Insult to Inclusion</em>
        </li>

        <li>
          Government of India – The Transgender Persons (Protection of Rights)
          Act, 2019
        </li>

        <li>
          Indian Express (2021) – NCERT Gender Diversity Training Manual
        </li>

        <li>
          Keshav Suri Foundation – #PureLove Campaign
        </li>

        <li>
          Naz Foundation (India) Trust
        </li>

        <li>
          BBC News – India's Only Openly Gay Prince Opens LGBT Centre
        </li>

        <li>
          Interview with Sushant Divgikar (Rani Ko-HE-Nur)
        </li>

      </ul>

    </div>

  `,
},

];

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 md:px-12 lg:px-24">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 tracking-tight">
          AVASA Blogs & Stories
        </h1>

        <p className="text-gray-400 text-lg md:text-xl">
          Discover insightful articles, community updates, and stories of
          impact from our team and contributors.
        </p>

      </div>

      {selectedBlog ? (

        /* ---------------- FULL ARTICLE ---------------- */

        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-10 shadow-xl transition-all duration-300">

          <button
            onClick={() => setSelectedBlog(null)}
            className="mb-6 flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors"
          >
            ← Back to all blogs
          </button>

          <div className="flex items-center gap-3 text-sm text-pink-400 font-semibold mb-3">
            <span>{selectedBlog.category}</span>
            <span>•</span>
            <span className="text-gray-400">
              {selectedBlog.readTime}
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {selectedBlog.title}
          </h2>

          <div className="flex items-center gap-4 text-gray-400 text-sm mb-8 pb-6 border-b border-gray-800">

            <div>
              Author:{" "}
              <span className="text-white font-medium">
                {selectedBlog.author}
              </span>
            </div>

            <span>•</span>

            <div>{selectedBlog.date}</div>

          </div>

          <div
            className="prose prose-invert max-w-none text-gray-300"
            dangerouslySetInnerHTML={{
              __html: selectedBlog.content,
            }}
          />

          <div className="mt-10 pt-6 border-t border-gray-800 text-center">

            <button
              onClick={() => setSelectedBlog(null)}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Back to All Articles
            </button>

          </div>

        </div>

      ) : (

        /* ---------------- BLOG GRID ---------------- */

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {blogData.map((blog) => (

            <div
              key={blog.id}
              className="bg-gray-900 border border-gray-800 hover:border-pink-500/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 group"
            >

              <div>

                <div className="flex items-center justify-between text-xs text-pink-400 font-semibold mb-3">

                  <span className="uppercase tracking-wider">
                    {blog.category}
                  </span>

                  <span className="text-gray-400">
                    {blog.readTime}
                  </span>

                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {blog.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {blog.summary}
                </p>

              </div>

              <div>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-800 mb-4">

                  <span>
                    By{" "}
                    <strong className="text-gray-200">
                      {blog.author}
                    </strong>
                  </span>

                  <span>{blog.date}</span>

                </div>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="w-full bg-pink-600/20 hover:bg-pink-600 text-pink-400 hover:text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-all duration-200 text-center border border-pink-500/30 hover:border-transparent"
                >
                  Read Full Article →
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}