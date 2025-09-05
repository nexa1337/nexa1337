import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, Plus, Trash2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function toList(val: string) {
  return val
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function escapeMd(text: string) {
  return text.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));
}

export default function READMEGenerator() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [tagline, setTagline] = useState("AI • Automation • Digital Growth");
  const [about, setAbout] = useState("We build smart experiences with AI, automation, and clean design.");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [skills, setSkills] = useState("JavaScript, TypeScript, React, Next.js, Node.js, Python, AI, Automation");
  const [tools, setTools] = useState("Git, Docker, Postgres, Redis, AWS, Vercel");
  const [theme, setTheme] = useState("tokyonight");

  const [showStats, setShowStats] = useState(true);
  const [showTopLangs, setShowTopLangs] = useState(true);
  const [showStreak, setShowStreak] = useState(true);

  type Project = { name: string; desc: string; link: string };
  const [projects, setProjects] = useState<Project[]>([
    { name: "NEXA Website", desc: "Agency site with modern UI and SEO-first content.", link: "https://nexa.example" },
  ]);

  const addProject = () => setProjects((p) => [...p, { name: "", desc: "", link: "" }]);
  const removeProject = (idx: number) => setProjects((p) => p.filter((_, i) => i !== idx));
  const updateProject = (idx: number, key: keyof Project, val: string) =>
    setProjects((p) => p.map((it, i) => (i === idx ? { ...it, [key]: val } : it)));

  const badges = useMemo(() => {
    const parts: string[] = [];
    const skillList = toList(skills);
    const toolList = toList(tools);

    if (skillList.length) {
      parts.push(`**Skills**: ${skillList.map((s) => `\`${escapeMd(s)}\``).join(" · ")}`);
    }
    if (toolList.length) {
      parts.push(`**Tools**: ${toolList.map((s) => `\`${escapeMd(s)}\``).join(" · ")}`);
    }

    return parts.join("\n\n");
  }, [skills, tools]);

  const socials = useMemo(() => {
    const items: string[] = [];
    if (website) items.push(`[Website](${website})`);
    if (linkedin) items.push(`[LinkedIn](${linkedin})`);
    if (twitter) items.push(`[Twitter/X](${twitter})`);
    if (instagram) items.push(`[Instagram](${instagram})`);
    if (youtube) items.push(`[YouTube](${youtube})`);
    if (email) items.push(`[Email](mailto:${email})`);
    return items.join(" • ");
  }, [website, linkedin, twitter, instagram, youtube, email]);

  const statsBlock = useMemo(() => {
    if (!username) return "";
    const lines: string[] = [];
    if (showStats)
      lines.push(
        `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme})`
      );
    if (showTopLangs)
      lines.push(
        `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme})`
      );
    if (showStreak)
      lines.push(`![GitHub Streak](https://streak-stats.demolab.com?user=${username}&theme=${theme})`);
    return lines.join("\n\n");
  }, [username, theme, showStats, showTopLangs, showStreak]);

  const projectBlock = useMemo(() => {
    if (!projects.length) return "";
    const rows = projects
      .filter((p) => p.name || p.desc || p.link)
      .map((p) => `- **${escapeMd(p.name || "Project")}** — ${escapeMd(p.desc || "" )} ${p.link ? `[Live](${p.link})` : ""}`);
    return rows.length ? rows.join("\n") : "";
  }, [projects]);

  const markdown = useMemo(() => {
    const title = displayName || username || "NEXA";

    const lines: string[] = [];
    lines.push(`# ${escapeMd(title)}`);
    if (tagline) lines.push(`**${escapeMd(tagline)}**`);
    lines.push("");

    if (about) {
      lines.push(about);
      lines.push("");
    }

    if (socials) {
      lines.push(socials);
      lines.push("");
    }

    if (location) lines.push(`📍 ${escapeMd(location)}`);
    if (badges) {
      lines.push("");
      lines.push(badges);
    }

    if (projectBlock) {
      lines.push("\n## Featured Projects\n");
      lines.push(projectBlock);
    }

    if (username && (showStats || showTopLangs || showStreak)) {
      lines.push("\n## Stats\n");
      lines.push(statsBlock);
    }

    lines.push("\n---\nMade with ❤️ by NEXA README Generator\n");

    return lines.join("\n");
  }, [displayName, username, tagline, about, socials, location, badges, projectBlock, statsBlock]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(markdown);
  };

  const downloadFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const pill = (text: string) => (
    <Badge className="rounded-2xl px-3 py-1 text-xs font-medium">{text}</Badge>
  );

  return (
    <div className="min-h-screen w-full bg-[#02050a] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Form */}
        <Card className="bg-[#11151c] border-0 shadow-xl rounded-2xl">
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">GitHub Profile README Generator</h1>
              <div className="flex items-center gap-2">{pill("NEXA")}{pill("v1.0")}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>GitHub Username *</Label>
                <Input placeholder="e.g. nexa1337" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <Label>Display Name</Label>
                <Input placeholder="e.g. NEXA" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <Label>Tagline</Label>
                <Input placeholder="e.g. AI • Automation • Digital Growth" value={tagline} onChange={(e) => setTagline(e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <Label>About</Label>
                <Textarea rows={4} value={about} onChange={(e) => setAbout(e.target.value)} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Location</Label>
                <Input placeholder="e.g. Casablanca, MA" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div>
                <Label>Email</Label>
                <Input placeholder="e.g. hello@nexa.agency" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label>Website</Label>
                <Input placeholder="https://nexa.agency" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <div>
                <Label>LinkedIn</Label>
                <Input placeholder="https://linkedin.com/in/username" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
              </div>
              <div>
                <Label>Twitter/X</Label>
                <Input placeholder="https://x.com/username" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
              </div>
              <div>
                <Label>Instagram</Label>
                <Input placeholder="https://instagram.com/username" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
              </div>
              <div>
                <Label>YouTube</Label>
                <Input placeholder="https://youtube.com/@channel" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Skills (comma-separated)</Label>
                <Input value={skills} onChange={(e) => setSkills(e.target.value)} />
              </div>
              <div>
                <Label>Tools (comma-separated)</Label>
                <Input value={tools} onChange={(e) => setTools(e.target.value)} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex items-center gap-3">
                <Switch checked={showStats} onCheckedChange={setShowStats} />
                <Label>Include GitHub Stats</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={showTopLangs} onCheckedChange={setShowTopLangs} />
                <Label>Include Top Languages</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={showStreak} onCheckedChange={setShowStreak} />
                <Label>Include Streak</Label>
              </div>
              <div>
                <Label>Stats Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="bg-[#0b0f15] border-[#1a2230]">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0b0f15] text-white border-[#1a2230]">
                    {[
                      "tokyonight",
                      "radical",
                      "dark",
                      "dracula",
                      "merko",
                      "onedark",
                      "gruvbox",
                      "synthwave",
                    ].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Featured Projects</h2>
                <Button onClick={addProject} className="rounded-2xl" variant="secondary">
                  <Plus className="w-4 h-4 mr-2" /> Add Project
                </Button>
              </div>
              <div className="space-y-3">
                {projects.map((p, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-[#0b0f15] rounded-2xl p-4 border border-[#1a2230]">
                    <div className="md:col-span-3">
                      <Label>Name</Label>
                      <Input value={p.name} onChange={(e) => updateProject(idx, "name", e.target.value)} placeholder="Project name" />
                    </div>
                    <div className="md:col-span-6">
                      <Label>Description</Label>
                      <Input value={p.desc} onChange={(e) => updateProject(idx, "desc", e.target.value)} placeholder="Short description" />
                    </div>
                    <div className="md:col-span-3">
                      <Label>Link</Label>
                      <Input value={p.link} onChange={(e) => updateProject(idx, "link", e.target.value)} placeholder="https://..." />
                    </div>
                    <div className="md:col-span-12 flex justify-end">
                      <Button variant="destructive" onClick={() => removeProject(idx)} className="rounded-2xl">
                        <Trash2 className="w-4 h-4 mr-2" /> Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button onClick={copyToClipboard} className="rounded-2xl"><Copy className="w-4 h-4 mr-2"/> Copy Markdown</Button>
              <Button onClick={downloadFile} variant="secondary" className="rounded-2xl"><Download className="w-4 h-4 mr-2"/> Download README.md</Button>
            </div>
          </CardContent>
        </Card>

        {/* Right: Preview */}
        <Card className="bg-[#11151c] border-0 shadow-xl rounded-2xl">
          <CardContent className="p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-semibold">Live Preview</h2>
            <div className="rounded-2xl border border-[#1a2230] bg-[#0b0f15] p-4 max-h-[70vh] overflow-auto prose prose-invert prose-pre:bg-[#0b0f15]">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
            <h2 className="text-xl font-semibold">Raw Markdown</h2>
            <Textarea className="font-mono text-sm min-h-[220px]" value={markdown} readOnly />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
