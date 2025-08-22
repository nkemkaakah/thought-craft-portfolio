export interface TerminalOutput {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp: Date;
}

export class TerminalCommandHandler {
  private currentDirectory = '/home/nkemka';
  
  private commands = {
    help: () => this.helpCommand(),
    clear: () => ({ clear: true }),
    ls: (args: string[]) => this.listCommand(args),
    cat: (args: string[]) => this.catCommand(args),
    cd: (args: string[]) => this.changeDirectoryCommand(args),
    pwd: () => this.printWorkingDirectory(),
    whoami: () => this.whoAmI(),
    date: () => new Date().toString(),
    uname: () => 'Linux portfolio-terminal 5.4.0 #1 SMP x86_64 GNU/Linux',
    echo: (args: string[]) => args.join(' '),
    ps: () => this.processStatus(),
    top: () => this.topCommand(),
    history: () => this.historyCommand(),
    exit: () => 'Use the toggle button to exit terminal mode',
    github: () => 'Opening GitHub profile... https://github.com/nkemkaakah',
    linkedin: () => 'Opening LinkedIn profile... https://www.linkedin.com/in/nkemka-akah-861408253/',
    email: () => 'Opening email client... nkemkaomeiza@gmail.com',
    neofetch: () => this.neofetchCommand(),
  };

  private files = {
    '/home/nkemka': {
      'about.txt': `Hi, I'm Nkemka Akah 👋

Seasoned full-stack web developer leveraging AI to craft scalable, 
real-world solutions and currently driving innovation in recruitment tech.

I build tools that think, so you can think bigger.

📍 Location: London, UK
🔥 Currently working at: Rulebase
☕ Fueled by: Curiosity and coffee
⚡ Focus: Building impactful solutions that make a difference

Core Philosophy:
• Write code that solves real problems
• Leverage AI to amplify human potential  
• Build tools that scale and make impact
• Always be learning, always be building

Skills: Full-Stack Development, AI Integration, Problem Solving
Experience: Rulebase, Microsoft, Zenstrin, Iwemi Research`,

      'skills.json': JSON.stringify({
        languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS', 'SQL', 'NoSQL', 'C', 'C++'],
        frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
        backend: ['FastAPI', 'SpringBoot', 'Node.js', 'PostgreSQL', 'MongoDB', 'Vector DBs'],
        ai_ml: ['LangChain', 'OpenAI API', 'NLP', 'Machine Learning', 'LLM Integration', 'AI Development'],
        developer_tools: ['AWS', 'Postman', 'Git', 'Docker', 'Supabase', 'Firebase', 'Azure', 'Jira'],
        databases: ['PostgreSQL', 'MongoDB', 'Vector Databases', 'SQL', 'NoSQL', 'Database Design']
      }, null, 2),

      'contact.json': JSON.stringify({
        name: "Nkemka Akah",
        email: "nkemkaomeiza@gmail.com",
        linkedin: "https://www.linkedin.com/in/nkemka-akah-861408253/",
        github: "https://github.com/nkemkaakah",
        location: "London, UK",
        timezone: "GMT (UTC+0)",
        status: "Available for opportunities"
      }, null, 2),
    },
    '/home/nkemka/projects': {
      'voxguard/': 'Real-time voice fraud detection platform',
      'zenfinder/': 'AI-powered talent discovery tool',
      'iwemiresearch/': 'E-commerce platform with secure payments'
    },
    '/home/nkemka/experience': {
      'rulebase.md': `# Rulebase - Software Engineer Intern
**Period:** July 2025 - September 2025
**Location:** London, UK

## Achievements
- Improved analyst decision-making speed by 35%
- Reduced compliance review latency by 20%
- Built LLM-powered QA insights UI components
- Collaborated with ML teams on risk-scoring integration`,

      'microsoft.md': `# Microsoft - Software Engineer Intern  
**Period:** June 2023 - August 2023
**Location:** Lagos, Nigeria

## Achievements
- Improved backend service scalability and reliability
- Streamlined deployment workflows
- Supported data validation across AWS/Azure/GCP`,
    }
  };

  processCommand(command: string, history: string[]): TerminalOutput[] {
    const parts = command.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const output: TerminalOutput[] = [
      {
        type: 'command',
        content: `$ ${command}`,
        timestamp: new Date()
      }
    ];

    try {
      if (cmd in this.commands) {
        const result = this.commands[cmd as keyof typeof this.commands](args);
        
        if (typeof result === 'object' && result.clear) {
          return [{ type: 'output', content: 'clear', timestamp: new Date() }];
        }
        
        output.push({
          type: 'output',
          content: typeof result === 'string' ? result : JSON.stringify(result, null, 2),
          timestamp: new Date()
        });
      } else {
        output.push({
          type: 'error',
          content: `zsh: command not found: ${cmd}. Type 'help' for available commands.`,
          timestamp: new Date()
        });
      }
    } catch (error) {
      output.push({
        type: 'error',
        content: `Error executing command: ${error}`,
        timestamp: new Date()
      });
    }

    return output;
  }

  private helpCommand(): string {
    return `Available commands:

Navigation:
  ls [path]         - List directory contents
  cd [path]         - Change directory
  pwd              - Print working directory

File Operations:
  cat <file>       - Display file contents
  
System Information:
  whoami           - Display current user
  date             - Show current date and time
  uname            - System information
  neofetch         - System info with style
  ps               - Show running processes
  top              - Display system processes

Utility:
  echo <text>      - Display text
  history          - Show command history
  clear            - Clear terminal screen
  help             - Show this help message
  exit             - Exit terminal mode

Social/Contact:
  github           - Open GitHub profile
  linkedin         - Open LinkedIn profile  
  email            - Open email client

Portfolio Navigation:
  cat about.txt    - View about information
  cat skills.json  - View technical skills
  cat contact.json - View contact information
  ls projects/     - List projects
  ls experience/   - List work experience

Try: cat about.txt or ls projects/ to explore!`;
  }

  private listCommand(args: string[]): string {
    const path = args[0] || this.currentDirectory;
    const fullPath = this.resolvePath(path);
    
    if (fullPath in this.files) {
      const contents = this.files[fullPath as keyof typeof this.files];
      if (typeof contents === 'object') {
        return Object.keys(contents).map(item => {
          const isDirectory = item.endsWith('/');
          return isDirectory ? `\x1b[34m${item}\x1b[0m` : item;
        }).join('\n');
      }
    }
    
    return `ls: cannot access '${path}': No such file or directory`;
  }

  private catCommand(args: string[]): string {
    if (args.length === 0) {
      return 'cat: missing file operand. Usage: cat <filename>';
    }
    
    const filename = args[0];
    const fullPath = this.resolvePath(filename);
    const directory = fullPath.substring(0, fullPath.lastIndexOf('/'));
    
    if (directory in this.files) {
      const dirContents = this.files[directory as keyof typeof this.files];
      if (typeof dirContents === 'object' && filename in dirContents) {
        return dirContents[filename as keyof typeof dirContents] as string;
      }
    }
    
    return `cat: ${filename}: No such file or directory`;
  }

  private changeDirectoryCommand(args: string[]): string {
    if (args.length === 0) {
      this.currentDirectory = '/home/nkemka';
      return '';
    }
    
    const path = this.resolvePath(args[0]);
    if (path in this.files) {
      this.currentDirectory = path;
      return '';
    }
    
    return `cd: no such file or directory: ${args[0]}`;
  }

  private printWorkingDirectory(): string {
    return this.currentDirectory;
  }

  private whoAmI(): string {
    return 'nkemka';
  }

  private processStatus(): string {
    return `  PID TTY          TIME CMD
    1 pts/0    00:00:01 portfolio
 1234 pts/0    00:00:00 terminal
 1235 pts/0    00:00:00 ps`;
  }

  private topCommand(): string {
    return `top - ${new Date().toLocaleTimeString()} up 1 day, 2:30, 1 user, load average: 0.1, 0.2, 0.1
Tasks: 3 total, 1 running, 2 sleeping
%CPU usage: 2.1 us, 1.2 sy, 0.0 ni, 96.7 id

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
    1 nkemka    20   0  123456   4567   2345 S   1.3  0.1   0:01.23 portfolio
 1234 nkemka    20   0   98765   3456   1234 S   0.7  0.1   0:00.45 terminal`;
  }

  private historyCommand(): string {
    return 'Command history is maintained in your session. Use ↑/↓ arrows to navigate.';
  }

  private neofetchCommand(): string {
    return `
                   -\`                 nkemka@portfolio
                  .o+\`                OS: Portfolio Linux
                 \`ooo/                Host: Terminal Interface
                \`+oooo:               Kernel: 5.4.0-portfolio
               \`+oooooo:              Uptime: Always online
               -+oooooo+:             Shell: zsh
             \`/:-:++oooo+:            Terminal: Interactive Portfolio
            \`/++++/+++++++:           CPU: Full-Stack Developer
           \`/++++++++++++++:          Memory: ∞ curiosity
          \`/+++ooooooooooooo/\`        DE: React + TypeScript
         ./ooosssso++osssssso+\`       Theme: Terminal Dark
        .oossssso-\`\`\`\`/ossssss+\`      Icons: Lucide React
       -osssssso.      :ssssssso.     Location: London, UK
      :osssssss/        osssso+++.    
     /ossssssss/        +ssssooo/-    Languages: 10
   \`/ossssso+/:-        -:/+osssso+\`  Experience: 3+ years
  \`+sso+:-\`                 \`.-/+oso: Current: Rulebase
 \`++:.                           \`-/+/ Status: Building the future
 .\`                                 \`\``;
  }

  private resolvePath(path: string): string {
    if (path.startsWith('/')) {
      return path;
    }
    
    if (path === '..') {
      const parts = this.currentDirectory.split('/');
      parts.pop();
      return parts.join('/') || '/';
    }
    
    if (path === '.') {
      return this.currentDirectory;
    }
    
    return `${this.currentDirectory}/${path}`.replace(/\/+/g, '/');
  }
}
