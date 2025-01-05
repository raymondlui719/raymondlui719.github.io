import AndroidstudioOriginal from "devicons-react/lib/icons/AndroidstudioOriginal";
import ApacheOriginalWordmark from "devicons-react/lib/icons/ApacheOriginalWordmark";
import CypressioPlainWordmark from "devicons-react/lib/icons/CypressioPlainWordmark";
import DockerPlainWordmark from "devicons-react/lib/icons/DockerPlainWordmark";
import FlutterOriginal from "devicons-react/lib/icons/FlutterOriginal";
import GithubOriginalWordmark from "devicons-react/lib/icons/GithubOriginalWordmark";
import JetpackcomposeOriginalWordmark from "devicons-react/lib/icons/JetpackcomposeOriginalWordmark";
import KnexjsOriginalWordmark from "devicons-react/lib/icons/KnexjsOriginalWordmark";
import KotlinOriginal from "devicons-react/lib/icons/KotlinOriginal";
import LaravelOriginalWordmark from "devicons-react/lib/icons/LaravelOriginalWordmark";
import MysqlOriginalWordmark from "devicons-react/lib/icons/MysqlOriginalWordmark";
import NextjsOriginalWordmark from "devicons-react/lib/icons/NextjsOriginalWordmark";
import PhpstormOriginal from "devicons-react/lib/icons/PhpstormOriginal";
import PostgresqlOriginalWordmark from "devicons-react/lib/icons/PostgresqlOriginalWordmark";
import PrismaOriginalWordmark from "devicons-react/lib/icons/PrismaOriginalWordmark";
import ReactnativeOriginalWordmark from "devicons-react/lib/icons/ReactnativeOriginalWordmark";
import ReactOriginalWordmark from "devicons-react/lib/icons/ReactOriginalWordmark";
import SlackOriginalWordmark from "devicons-react/lib/icons/SlackOriginalWordmark";
import SqlitePlainWordmark from "devicons-react/lib/icons/SqlitePlainWordmark";
import SwiftOriginal from "devicons-react/lib/icons/SwiftOriginal";
import TailwindcssOriginal from "devicons-react/lib/icons/TailwindcssOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import VscodeOriginal from "devicons-react/lib/icons/VscodeOriginal";
import VuejsOriginalWordmark from "devicons-react/lib/icons/VuejsOriginalWordmark";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex scroll-mt-20 flex-col items-center justify-center lg:py-16"
      style={{
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <h2 className="text-3xl font-bold tracking-tight">Skills/Tools</h2>
      <p className="text-muted-foreground">Technologies that I have worked frequently with</p>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{"Frontend (Web)"}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:gap-x-3">
            <ReactOriginalWordmark size="30%" />
            <TypescriptOriginal size="30%" />
            <VuejsOriginalWordmark size="30%" />
            <TailwindcssOriginal size="30%" />
            <CypressioPlainWordmark size="30%" className="!fill-foreground" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{"Mobile App"}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:gap-x-3">
            <ReactnativeOriginalWordmark size="30%" />
            <FlutterOriginal size="30%" />
            <SwiftOriginal size="30%" />
            <KotlinOriginal size="30%" />
            <JetpackcomposeOriginalWordmark size="30%" />
            <SqlitePlainWordmark size="30%" className="!fill-foreground" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:gap-x-3">
            <NextjsOriginalWordmark size="30%" className="fill-foreground" />
            <LaravelOriginalWordmark size="30%" />
            <MysqlOriginalWordmark size="30%" />
            <PostgresqlOriginalWordmark size="30%" className="fill-foreground" />
            <PrismaOriginalWordmark size="30%" className="dark:invert" />
            <KnexjsOriginalWordmark size="30%" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Work</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:gap-x-3">
            <SlackOriginalWordmark size="50%" className="fill-foreground" />
            <GithubOriginalWordmark size="30%" className="dark:invert" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Deployment</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-x-5 gap-y-6">
            <DockerPlainWordmark size="30%" className="fill-foreground" />
            <ApacheOriginalWordmark size="50%" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dev Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:gap-x-3">
            <AndroidstudioOriginal size="30%" />
            <VscodeOriginal size="30%" />
            <PhpstormOriginal size="30%" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
