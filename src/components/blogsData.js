export const blogs = [
  {
    id: 1,
    title: "How I Structure a Scalable React Project",
    slug: "scalable-react-project-structure",
    summary:
      "A proven folder structure and architecture for building React applications that scale.",
    contentPreview:
      "In this article, I break down how I structure components, hooks, services, and utilities in large React projects...",
    tags: ["React", "Architecture", "Scalability"],
    category: "Frontend",
    readingTime: "6 min",
    publishedAt: "2026-02-01",
    updatedAt: "2026-02-05",
    level: "Intermediate",
    status: "published",
    featured: true,
    coverImage:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    author: {
      name: "Jitendra Saini",
      role: "Frontend / Full-Stack Developer",
    },

    sections: [
      {
        id: "intro",
        title: "Introduction",
        type: "text",
        content: `
        When React projects grow, poor folder structure can slow teams down.
        In this section, we’ll understand why scalability matters and how
        architecture impacts maintainability.
      `,
      },
      {
        id: "folder-structure",
        title: "Recommended Folder Structure",
        type: "code",
        language: "bash",
        content: `
        src/
        ├── components/
        ├── hooks/
        ├── pages/
        ├── services/
        ├── utils/
        ├── assets/
        └── App.jsx
      `,
      },
      {
        id: "components",
        title: "Components Organization",
        type: "text",
        content: `
        Components should be grouped by feature rather than by type.
        This improves readability and reduces cross-dependencies.
      `,
      },
      {
        id: "best-practices",
        title: "Best Practices",
        type: "list",
        content: [
          "Keep components small and focused",
          "Use custom hooks for business logic",
          "Avoid deep relative imports",
          "Centralize API services",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        type: "text",
        content: `
        A well-structured React project saves time, reduces bugs, and
        makes onboarding new developers easier.
      `,
      },
    ],
  },
  {
    id: 2,
    title: "Common React Performance Mistakes (and How to Fix Them)",
    slug: "react-performance-mistakes",
    summary:
      "Real performance problems in React apps and practical solutions to fix them.",
    contentPreview:
      "From unnecessary re-renders to expensive computations, this post covers performance mistakes I’ve seen in production...",
    tags: ["React", "Performance"],
    category: "Frontend",
    readingTime: "8 min",
    publishedAt: "2026-02-03",
    updatedAt: null,
    level: "Advanced",
    status: "published",
    featured: true,
    coverImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    author: {
      name: "Jitendra Saini",
      role: "Frontend / Full-Stack Developer",
    },

    sections: [
      {
        id: "intro",
        title: "Introduction",
        type: "text",
        content: `
        React is fast by default, but poor patterns can silently kill performance.
        This article highlights real-world performance mistakes and shows how
        to fix them using proven techniques.
      `,
      },

      {
        id: "rerenders",
        title: "Unnecessary Re-renders",
        type: "text",
        content: `
        One of the most common performance issues in React apps is unnecessary
        re-rendering of components due to improper state management or props changes.
      `,
      },

      {
        id: "memo-example",
        title: "Fix with React.memo",
        type: "code",
        language: "jsx",
        content: `
        const ExpensiveComponent = React.memo(({ value }) => {
          return <div>{value}</div>;
        });
      `,
      },

      {
        id: "inline-functions",
        title: "Inline Functions in JSX",
        type: "text",
        content: `
        Defining functions inside JSX causes new function references on every render,
        breaking memoization and triggering extra renders.
      `,
      },

      {
        id: "usecallback-example",
        title: "Fix with useCallback",
        type: "code",
        language: "jsx",
        content: `
        const handleClick = useCallback(() => {
          setCount(c => c + 1);
        }, []);
      `,
      },

      {
        id: "expensive-calculations",
        title: "Expensive Calculations on Every Render",
        type: "text",
        content: `
        Heavy computations inside render cycles slow down UI updates,
        especially when dealing with large lists or complex logic.
      `,
      },

      {
        id: "usememo-example",
        title: "Fix with useMemo",
        type: "code",
        language: "jsx",
        content: `
        const totalPrice = useMemo(() => {
          return items.reduce((sum, item) => sum + item.price, 0);
        }, [items]);
      `,
      },

      {
        id: "list-keys",
        title: "Incorrect Keys in Lists",
        type: "text",
        content: `
        Using array indexes as keys breaks React's reconciliation,
        causing unnecessary DOM updates.
      `,
      },

      {
        id: "list-example",
        title: "Correct List Rendering",
        type: "code",
        language: "jsx",
        content: `
        items.map(item => (
          <ProductCard key={item.id} product={item} />
        ));
      `,
      },

      {
        id: "performance-checklist",
        title: "Performance Checklist",
        type: "list",
        content: [
          "Avoid unnecessary state updates",
          "Memoize expensive components",
          "Use useCallback and useMemo correctly",
          "Never use array index as key",
          "Lazy load heavy components",
        ],
      },

      {
        id: "conclusion",
        title: "Conclusion",
        type: "text",
        content: `
        Performance issues are often invisible until your app grows.
        With these fixes, you can keep your React apps fast, scalable,
        and production-ready.
      `,
      },
    ],
  }
  ,
  {
    id: 3,
    title: "useEffect Gotchas – Real Bugs I Faced & Solved",
    slug: "useeffect-gotchas",
    summary:
      "Common useEffect mistakes that lead to bugs, infinite loops, and unexpected behavior.",
    contentPreview:
      "useEffect looks simple, but dependency arrays can easily break your app...",
    tags: ["React", "Hooks"],
    category: "Frontend",
    readingTime: "5 min",
    publishedAt: "2026-02-04",
    updatedAt: null,
    level: "Intermediate",
    status: "published",
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    author: {
      name: "Jitendra Saini",
      role: "Frontend / Full-Stack Developer",
    },

    sections: [
      {
        id: "intro",
        title: "Introduction",
        type: "text",
        content: `
        useEffect is one of the most misunderstood React hooks.
        Small mistakes in dependency arrays or state updates can lead
        to infinite loops, stale data, or unexpected behavior.
      `,
      },

      {
        id: "missing-deps",
        title: "Missing Dependencies",
        type: "text",
        content: `
        Forgetting dependencies causes effects to run with stale values,
        leading to bugs that are very hard to debug.
      `,
      },

      {
        id: "missing-deps-example",
        title: "Bug Example",
        type: "code",
        language: "jsx",
        content: `
        useEffect(() => {
          fetchUser(userId);
        }, []); // ❌ userId is missing
      `,
      },

      {
        id: "missing-deps-fix",
        title: "Correct Fix",
        type: "code",
        language: "jsx",
        content: `
        useEffect(() => {
          fetchUser(userId);
        }, [userId]); // ✅
      `,
      },

      {
        id: "infinite-loop",
        title: "Infinite Re-render Loops",
        type: "text",
        content: `
        Updating a dependency inside useEffect without proper guards
        causes the effect to run forever.
      `,
      },

      {
        id: "infinite-loop-example",
        title: "Infinite Loop Bug",
        type: "code",
        language: "jsx",
        content: `
        useEffect(() => {
          setCount(count + 1);
        }, [count]); // ❌
      `,
      },

      {
        id: "infinite-loop-fix",
        title: "Fix Using Functional Update",
        type: "code",
        language: "jsx",
        content: `
        useEffect(() => {
          setCount(c => c + 1);
        }, []); // ✅ runs once
      `,
      },

      {
        id: "object-deps",
        title: "Objects & Functions as Dependencies",
        type: "text",
        content: `
        Objects and functions are recreated on every render,
        which makes useEffect run more often than expected.
      `,
      },

      {
        id: "object-deps-fix",
        title: "Fix with useMemo / useCallback",
        type: "code",
        language: "jsx",
        content: `
        const filters = useMemo(() => ({ status }), [status]);

        useEffect(() => {
          fetchData(filters);
        }, [filters]);
      `,
      },

      {
        id: "cleanup",
        title: "Missing Cleanup Functions",
        type: "text",
        content: `
        Not cleaning up side effects like subscriptions or timers
        can cause memory leaks and unexpected behavior.
      `,
      },

      {
        id: "cleanup-example",
        title: "Cleanup Example",
        type: "code",
        language: "jsx",
        content: `
        useEffect(() => {
          const timer = setInterval(() => {
            console.log("running");
          }, 1000);

          return () => clearInterval(timer); // ✅ cleanup
        }, []);
      `,
      },

      {
        id: "best-practices",
        title: "Best Practices",
        type: "list",
        content: [
          "Always include all dependencies",
          "Avoid updating dependencies inside effects",
          "Memoize objects and functions",
          "Use cleanup functions",
          "Keep effects small and focused",
        ],
      },

      {
        id: "conclusion",
        title: "Conclusion",
        type: "text",
        content: `
        useEffect becomes predictable once you respect dependencies.
        Following these patterns will save you from painful bugs
        and infinite loops in production.
      `,
      },
    ],
  }
  ,
 {
  id: 4,
  title: "Building Reusable MUI Components the Right Way",
  slug: "reusable-mui-components",
  summary:
    "How to design clean, reusable, and maintainable Material UI components.",
  contentPreview:
    "In this article, I share my approach to abstracting MUI components without over-engineering...",
  tags: ["React", "MUI"],
  category: "Frontend",
  readingTime: "7 min",
  publishedAt: "2026-02-06",
  updatedAt: null,
  level: "Intermediate",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Frontend / Full-Stack Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Material UI gives you powerful building blocks, but without discipline
        components quickly become bloated, inconsistent, and hard to maintain.
        This article shows how to build reusable MUI components the right way.
      `,
    },

    {
      id: "when-to-abstract",
      title: "When to Create Reusable Components",
      type: "text",
      content: `
        Not every component needs abstraction. Reusability should solve repetition,
        not predict the future.
      `,
    },

    {
      id: "bad-abstraction-example",
      title: "Over-Abstracted Component (Anti-Pattern)",
      type: "code",
      language: "jsx",
      content: `
        const CustomButton = ({ color, variant, size, fullWidth, ...props }) => {
          return (
            <Button
              color={color}
              variant={variant}
              size={size}
              fullWidth={fullWidth}
              {...props}
            />
          );
        };
      `,
    },

    {
      id: "good-abstraction-example",
      title: "Focused Reusable Component",
      type: "code",
      language: "jsx",
      content: `
        const PrimaryButton = ({ children, ...props }) => {
          return (
            <Button variant="contained" color="primary" {...props}>
              {children}
            </Button>
          );
        };
      `,
    },

    {
      id: "styling",
      title: "Styling Reusable Components",
      type: "text",
      content: `
        Centralizing styles avoids duplication and keeps your UI consistent
        across the app.
      `,
    },

    {
      id: "styled-example",
      title: "Using styled API",
      type: "code",
      language: "jsx",
      content: `
        const CardWrapper = styled(Card)(({ theme }) => ({
          padding: theme.spacing(3),
          borderRadius: theme.shape.borderRadius,
        }));
      `,
    },

    {
      id: "composition",
      title: "Prefer Composition Over Props",
      type: "text",
      content: `
        Components become more flexible when you allow composition
        instead of endless boolean props.
      `,
    },

    {
      id: "composition-example",
      title: "Composition Example",
      type: "code",
      language: "jsx",
      content: `
        const PageLayout = ({ header, content }) => (
          <>
            <Box>{header}</Box>
            <Box>{content}</Box>
          </>
        );
      `,
    },

    {
      id: "theme",
      title: "Leverage MUI Theme",
      type: "text",
      content: `
        Reusable components should depend on the theme,
        not hardcoded values.
      `,
    },

    {
      id: "theme-example",
      title: "Theme-Based Styling",
      type: "code",
      language: "jsx",
      content: `
        const StyledText = styled(Typography)(({ theme }) => ({
          color: theme.palette.text.secondary,
        }));
      `,
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Abstract only repeated patterns",
        "Avoid wrapper components that add no value",
        "Use composition instead of prop explosion",
        "Rely on theme instead of hardcoded styles",
        "Keep components small and focused",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Well-designed reusable components improve speed, consistency,
        and developer happiness. Keep abstractions simple and purposeful.
      `,
    },
  ],
}
,
 {
  id: 5,
  title: "Role-Based UI Rendering in React",
  slug: "role-based-ui-react",
  summary:
    "A practical approach to implementing role-based access control on the frontend.",
  contentPreview:
    "Handling permissions on the UI layer is tricky. This post explains a clean RBAC setup...",
  tags: ["React", "RBAC"],
  category: "Frontend",
  readingTime: "6 min",
  publishedAt: "2026-02-08",
  updatedAt: null,
  level: "Advanced",
  status: "published",
  featured: true,
  coverImage:
    "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Frontend / Full-Stack Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Role-based UI rendering ensures users only see what they are allowed to see.
        While backend authorization is critical, frontend RBAC improves UX,
        clarity, and security perception.
      `,
    },

    {
      id: "rbac-basics",
      title: "Understanding RBAC",
      type: "text",
      content: `
        Role-Based Access Control (RBAC) assigns permissions to roles instead
        of individual users, making access management scalable and maintainable.
      `,
    },

    {
      id: "bad-approach",
      title: "The Naive Approach (Anti-Pattern)",
      type: "code",
      language: "jsx",
      content: `
        {user.role === "admin" && <AdminPanel />}
        {user.role === "manager" && <ManagerPanel />}
      `,
    },

    {
      id: "permission-map",
      title: "Permission-Based Mapping",
      type: "code",
      language: "js",
      content: `
        const PERMISSIONS = {
          admin: ["dashboard.view", "user.manage", "reports.view"],
          manager: ["dashboard.view", "reports.view"],
          user: ["dashboard.view"],
        };
      `,
    },

    {
      id: "can-util",
      title: "Create a Permission Helper",
      type: "code",
      language: "js",
      content: `
        export const can = (user, permission) =>
          user?.permissions?.includes(permission);
      `,
    },

    {
      id: "protected-component",
      title: "Protected Component Wrapper",
      type: "code",
      language: "jsx",
      content: `
        const Can = ({ permission, children }) => {
          const user = useAuth();
          return can(user, permission) ? children : null;
        };
      `,
    },

    {
      id: "usage-example",
      title: "Usage Example",
      type: "code",
      language: "jsx",
      content: `
        <Can permission="user.manage">
          <AddUserButton />
        </Can>
      `,
    },

    {
      id: "backend-sync",
      title: "Sync with Backend Permissions",
      type: "text",
      content: `
        Never hardcode permissions blindly. Always rely on
        backend-provided permissions via JWT or API response.
      `,
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Never trust frontend RBAC alone",
        "Use permission strings, not role checks",
        "Create reusable guards/components",
        "Hide UI early, not after render",
        "Keep permissions in one central file",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        A clean RBAC implementation simplifies UI logic,
        improves maintainability, and prevents accidental access.
        Done right, it scales effortlessly with your product.
      `,
    },
  ],
}
,
{
  id: 10,
  title: "Client-Side Pagination vs Server-Side Pagination",
  slug: "client-vs-server-pagination",
  summary:
    "A practical comparison of client-side and server-side pagination with real use cases.",
  contentPreview:
    "Pagination choice can break performance. This post explains when to use which approach...",
  tags: ["React", "Pagination"],
  category: "Frontend",
  readingTime: "6 min",
  publishedAt: "2026-02-10",
  updatedAt: null,
  level: "Intermediate",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Frontend Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Pagination is more than a UI choice — it directly impacts performance,
        scalability, and user experience. Choosing the wrong strategy can
        slow down your app as data grows.
      `,
    },

    {
      id: "client-side",
      title: "What Is Client-Side Pagination?",
      type: "text",
      content: `
        Client-side pagination means fetching all records at once and
        paginating them in the browser using JavaScript.
      `,
    },

    {
      id: "client-example",
      title: "Client-Side Pagination Example",
      type: "code",
      language: "jsx",
      content: `
        const start = (page - 1) * pageSize;
        const paginatedData = data.slice(start, start + pageSize);
      `,
    },

    {
      id: "client-pros-cons",
      title: "Client-Side Pros & Cons",
      type: "list",
      content: [
        "✅ Simple to implement",
        "✅ Instant page switching",
        "❌ Large initial payload",
        "❌ Poor scalability for large datasets",
      ],
    },

    {
      id: "server-side",
      title: "What Is Server-Side Pagination?",
      type: "text",
      content: `
        Server-side pagination fetches only the required records
        for the current page using query parameters.
      `,
    },

    {
      id: "server-example",
      title: "Server-Side Pagination Example",
      type: "code",
      language: "js",
      content: `
        GET /api/users?page=2&limit=10
      `,
    },

    {
      id: "server-pros-cons",
      title: "Server-Side Pros & Cons",
      type: "list",
      content: [
        "✅ Scales to large datasets",
        "✅ Lower memory usage",
        "❌ Requires backend support",
        "❌ Slightly slower page transitions",
      ],
    },

    {
      id: "comparison",
      title: "Client vs Server Pagination",
      type: "list",
      content: [
        "Small datasets → Client-side pagination",
        "Large datasets → Server-side pagination",
        "Offline-first apps → Client-side",
        "Enterprise apps → Server-side",
      ],
    },

    {
      id: "hybrid",
      title: "Hybrid Pagination Approach",
      type: "text",
      content: `
        Some apps use hybrid pagination, fetching chunks of data
        and paginating them locally for better UX and performance.
      `,
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Measure dataset size before choosing",
        "Avoid client-side pagination for large data",
        "Use proper indexes for server-side pagination",
        "Provide loading states",
        "Consider cursor-based pagination for APIs",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Pagination strategy should evolve with your application.
        Start simple, but switch early before performance becomes a problem.
      `,
    },
  ],
}
,
{
  id: 11,
  title: "Form Handling in React – From Basic to Production-Ready",
  slug: "react-form-handling",
  summary:
    "How I build scalable, validated, and user-friendly forms in React.",
  contentPreview:
    "Forms grow complex quickly. This article covers patterns I use for production-ready forms...",
  tags: ["React", "Forms"],
  category: "Frontend",
  readingTime: "7 min",
  publishedAt: "2026-02-11",
  updatedAt: null,
  level: "Intermediate",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Frontend Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Forms seem simple at first, but validation, performance,
        and UX challenges appear quickly as apps grow.
        This article walks through practical patterns
        I use in production React apps.
      `,
    },

    {
      id: "basic-form",
      title: "Basic Controlled Form",
      type: "text",
      content: `
        Controlled components give you full control over form state,
        but can become verbose as complexity increases.
      `,
    },

    {
      id: "basic-form-example",
      title: "Basic Example",
      type: "code",
      language: "jsx",
      content: `
        const [email, setEmail] = useState("");

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      `,
    },

    {
      id: "state-scaling",
      title: "Scaling Form State",
      type: "text",
      content: `
        Managing individual state for each input does not scale well.
        Using a single form state object is more maintainable.
      `,
    },

    {
      id: "state-scaling-example",
      title: "Single State Object Pattern",
      type: "code",
      language: "jsx",
      content: `
        const [form, setForm] = useState({ email: "", password: "" });

        const handleChange = e => {
          setForm({ ...form, [e.target.name]: e.target.value });
        };
      `,
    },

    {
      id: "validation",
      title: "Validation Strategies",
      type: "text",
      content: `
        Validation should provide fast feedback
        without overwhelming users.
      `,
    },

    {
      id: "validation-example",
      title: "Simple Validation Example",
      type: "code",
      language: "js",
      content: `
        const errors = {};
        if (!form.email.includes("@")) {
          errors.email = "Invalid email address";
        }
      `,
    },

    {
      id: "libraries",
      title: "Using Form Libraries",
      type: "text",
      content: `
        Libraries like React Hook Form reduce re-renders
        and simplify validation logic.
      `,
    },

    {
      id: "rhf-example",
      title: "React Hook Form Example",
      type: "code",
      language: "jsx",
      content: `
        const { register, handleSubmit } = useForm();

        <input {...register("email")} />
      `,
    },

    {
      id: "ux",
      title: "User Experience Considerations",
      type: "list",
      content: [
        "Show validation messages clearly",
        "Disable submit during loading",
        "Preserve input values on errors",
        "Focus the first invalid field",
      ],
    },

    {
      id: "production-tips",
      title: "Production-Ready Tips",
      type: "list",
      content: [
        "Debounce validations",
        "Handle server-side errors gracefully",
        "Use schema validation (Yup/Zod)",
        "Write tests for critical forms",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Great forms are invisible to users.
        With the right patterns, you can build
        maintainable, accessible, and robust forms in React.
      `,
    },
  ],
}
,
{
  id: 12,
  title: "State Management Without Redux – When & Why",
  slug: "state-management-without-redux",
  summary:
    "Managing state effectively in React without adding unnecessary complexity.",
  contentPreview:
    "Redux isn’t always needed. This post explains alternative patterns I use in real apps...",
  tags: ["React", "State"],
  category: "Frontend",
  readingTime: "6 min",
  publishedAt: "2026-02-12",
  updatedAt: null,
  level: "Intermediate",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/3182824/pexels-photo-3182824.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Frontend Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Redux is powerful, but it introduces boilerplate and mental overhead.
        Many React applications can remain simple, fast, and scalable
        without a global state library.
      `,
    },

    {
      id: "when-redux-is-overkill",
      title: "When Redux Is Overkill",
      type: "list",
      content: [
        "Small to medium applications",
        "State is mostly local or page-scoped",
        "Minimal shared state across features",
        "No complex async flows",
      ],
    },

    {
      id: "local-state",
      title: "Local Component State",
      type: "text",
      content: `
        useState and useReducer are often enough
        for encapsulated component-level state.
      `,
    },

    {
      id: "useReducer-example",
      title: "Using useReducer",
      type: "code",
      language: "jsx",
      content: `
        const reducer = (state, action) => {
          switch (action.type) {
            case "increment":
              return { count: state.count + 1 };
            default:
              return state;
          }
        };

        const [state, dispatch] = useReducer(reducer, { count: 0 });
      `,
    },

    {
      id: "context",
      title: "Context API for Shared State",
      type: "text",
      content: `
        Context is ideal for global, low-frequency updates
        like themes, auth, and feature flags.
      `,
    },

    {
      id: "context-example",
      title: "Context Example",
      type: "code",
      language: "jsx",
      content: `
        const AuthContext = createContext(null);

        const useAuth = () => useContext(AuthContext);
      `,
    },

    {
      id: "server-state",
      title: "Server State Is Not UI State",
      type: "text",
      content: `
        Data fetching, caching, and syncing should be handled
        by server-state libraries, not Redux.
      `,
    },

    {
      id: "server-state-example",
      title: "Using React Query",
      type: "code",
      language: "jsx",
      content: `
        const { data, isLoading } = useQuery(
          ["users"],
          fetchUsers
        );
      `,
    },

    {
      id: "comparison",
      title: "Redux vs Alternatives",
      type: "list",
      content: [
        "Local UI state → useState / useReducer",
        "Shared app state → Context API",
        "Server state → React Query",
        "Complex workflows → Redux / Zustand",
      ],
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Start with local state",
        "Promote state only when necessary",
        "Separate server and UI state",
        "Avoid premature abstraction",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Redux is a tool, not a requirement.
        Choosing the simplest solution that works
        will keep your app maintainable and enjoyable to build.
      `,
    },
  ],
}
,
 {
  id: 13,
  title: "Error Boundaries in React – Why Every App Needs Them",
  slug: "react-error-boundaries",
  summary:
    "Handling UI crashes gracefully using React Error Boundaries.",
  contentPreview:
    "Production apps fail. This article shows how I prevent blank screens using error boundaries...",
  tags: ["React", "Error Handling"],
  category: "Frontend",
  readingTime: "5 min",
  publishedAt: "2026-02-13",
  updatedAt: null,
  level: "Advanced",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Frontend Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        No matter how good your code is, runtime errors happen in production.
        Error Boundaries prevent your entire app from crashing
        and give users a graceful fallback instead of a blank screen.
      `,
    },

    {
      id: "what-are-error-boundaries",
      title: "What Are Error Boundaries?",
      type: "text",
      content: `
        Error Boundaries are React components that catch JavaScript errors
        in their child component tree during rendering,
        lifecycle methods, and constructors.
      `,
    },

    {
      id: "what-they-dont-catch",
      title: "What Error Boundaries Do NOT Catch",
      type: "list",
      content: [
        "Errors inside event handlers",
        "Async errors (setTimeout, promises)",
        "Errors in server-side rendering",
        "Errors thrown inside the error boundary itself",
      ],
    },

    {
      id: "basic-implementation",
      title: "Basic Error Boundary Implementation",
      type: "code",
      language: "jsx",
      content: `
        class ErrorBoundary extends React.Component {
          state = { hasError: false };

          static getDerivedStateFromError() {
            return { hasError: true };
          }

          componentDidCatch(error, info) {
            console.error(error, info);
          }

          render() {
            if (this.state.hasError) {
              return <h2>Something went wrong.</h2>;
            }

            return this.props.children;
          }
        }
      `,
    },

    {
      id: "usage",
      title: "Where to Place Error Boundaries",
      type: "text",
      content: `
        Place error boundaries around risky UI sections
        like routes, feature modules, or third-party components —
        not just at the root.
      `,
    },

    {
      id: "usage-example",
      title: "Usage Example",
      type: "code",
      language: "jsx",
      content: `
        <ErrorBoundary>
          <UserDashboard />
        </ErrorBoundary>
      `,
    },

    {
      id: "logging",
      title: "Logging Errors",
      type: "text",
      content: `
        Error boundaries become far more valuable when
        errors are logged to monitoring tools.
      `,
    },

    {
      id: "logging-example",
      title: "Logging Example",
      type: "code",
      language: "js",
      content: `
        componentDidCatch(error, info) {
          logErrorToService(error, info);
        }
      `,
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Use multiple boundaries, not one global catch-all",
        "Provide meaningful fallback UI",
        "Log errors to a monitoring service",
        "Don’t hide critical crashes silently",
        "Test error scenarios",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Error Boundaries are essential defensive programming.
        They keep your app usable when things go wrong —
        and in production, things always go wrong.
      `,
    },
  ],
}
,

  // ---------- DEVOPS ----------
{
  id: 6,
  title: "How I Deployed a Node.js App on AWS (Step-by-Step)",
  slug: "deploy-nodejs-aws",
  summary:
    "A complete walkthrough of deploying a Node.js backend on AWS.",
  contentPreview:
    "From EC2 setup to environment configuration, here’s how I deployed my Node.js app...",
  tags: ["AWS", "Deployment"],
  category: "DevOps",
  readingTime: "10 min",
  publishedAt: "2026-02-02",
  updatedAt: "2026-02-07",
  level: "Intermediate",
  status: "published",
  featured: true,
  coverImage:
    "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Full-Stack Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Deploying a Node.js app on AWS can feel overwhelming at first.
        This guide walks through the exact steps I followed in production,
        from creating an EC2 instance to running the app reliably.
      `,
    },

    {
      id: "architecture",
      title: "Deployment Architecture",
      type: "list",
      content: [
        "EC2 for hosting the Node.js app",
        "Nginx as a reverse proxy",
        "PM2 for process management",
        "Environment variables for config",
      ],
    },

    {
      id: "ec2-setup",
      title: "Creating an EC2 Instance",
      type: "text",
      content: `
        I used an Ubuntu EC2 instance with proper security group rules
        to allow SSH and HTTP traffic.
      `,
    },

    {
      id: "ssh-example",
      title: "Connecting to EC2",
      type: "code",
      language: "bash",
      content: `
        ssh -i my-key.pem ubuntu@<EC2_PUBLIC_IP>
      `,
    },

    {
      id: "install-node",
      title: "Installing Node.js",
      type: "code",
      language: "bash",
      content: `
        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
        sudo apt install -y nodejs
      `,
    },

    {
      id: "app-setup",
      title: "Setting Up the Application",
      type: "text",
      content: `
        After cloning the repository, I installed dependencies
        and configured environment variables.
      `,
    },

    {
      id: "env-example",
      title: "Environment Variables",
      type: "code",
      language: "bash",
      content: `
        NODE_ENV=production
        PORT=4000
        DATABASE_URL=your_db_url
      `,
    },

    {
      id: "pm2",
      title: "Running the App with PM2",
      type: "text",
      content: `
        PM2 ensures the app stays alive
        even after crashes or server restarts.
      `,
    },

    {
      id: "pm2-example",
      title: "PM2 Commands",
      type: "code",
      language: "bash",
      content: `
        npm install -g pm2
        pm2 start index.js --name api
        pm2 save
      `,
    },

    {
      id: "nginx",
      title: "Configuring Nginx",
      type: "text",
      content: `
        Nginx acts as a reverse proxy,
        forwarding HTTP requests to the Node.js app.
      `,
    },

    {
      id: "nginx-example",
      title: "Nginx Config Example",
      type: "code",
      language: "nginx",
      content: `
        server {
          listen 80;
          location / {
            proxy_pass http://localhost:4000;
          }
        }
      `,
    },

    {
      id: "security",
      title: "Security & Best Practices",
      type: "list",
      content: [
        "Use environment variables for secrets",
        "Restrict EC2 security groups",
        "Enable automatic updates",
        "Use HTTPS with SSL certificates",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Once you understand the moving parts,
        deploying on AWS becomes predictable.
        This setup has served me reliably in production.
      `,
    },
  ],
}
,
 {
  id: 7,
  title: "AWS S3 Explained Simply – With Real Use Cases",
  slug: "aws-s3-real-use-cases",
  summary:
    "A beginner-friendly explanation of AWS S3 with real-world examples.",
  contentPreview:
    "AWS S3 is more than just storage. This article explains how I use it in production apps...",
  tags: ["AWS", "S3"],
  category: "DevOps",
  readingTime: "6 min",
  publishedAt: "2026-02-03",
  updatedAt: null,
  level: "Beginner",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Full-Stack Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        AWS S3 is one of the most commonly used AWS services,
        yet it's often misunderstood as “just file storage”.
        This article explains what S3 actually is and how it’s used
        in real production applications.
      `,
    },

    {
      id: "what-is-s3",
      title: "What Is AWS S3?",
      type: "text",
      content: `
        Amazon S3 (Simple Storage Service) is an object storage service
        designed to store and retrieve any amount of data
        from anywhere on the internet.
      `,
    },

    {
      id: "core-concepts",
      title: "Core Concepts",
      type: "list",
      content: [
        "Buckets → top-level containers",
        "Objects → files stored inside buckets",
        "Keys → unique file paths",
        "Regions → where data physically lives",
      ],
    },

    {
      id: "basic-example",
      title: "Basic Upload Concept",
      type: "code",
      language: "js",
      content: `
        s3.upload({
          Bucket: "my-app-assets",
          Key: "images/profile.png",
          Body: file
        });
      `,
    },

    {
      id: "use-case-1",
      title: "Use Case #1: Storing User Uploads",
      type: "text",
      content: `
        Profile images, documents, and videos are commonly stored in S3
        instead of your backend server to reduce load and improve scalability.
      `,
    },

    {
      id: "use-case-2",
      title: "Use Case #2: Hosting Static Assets",
      type: "text",
      content: `
        S3 can host frontend build files (HTML, CSS, JS),
        often combined with CloudFront for fast global delivery.
      `,
    },

    {
      id: "use-case-3",
      title: "Use Case #3: Backups & Logs",
      type: "text",
      content: `
        S3 is widely used for database backups,
        application logs, and long-term archival storage.
      `,
    },

    {
      id: "permissions",
      title: "Permissions & Security",
      type: "text",
      content: `
        Access to S3 is controlled using IAM policies
        and bucket policies to ensure only authorized access.
      `,
    },

    {
      id: "bucket-policy-example",
      title: "Simple Bucket Policy Example",
      type: "code",
      language: "json",
      content: `
        {
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::my-bucket/*"
        }
      `,
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Never make sensitive buckets public",
        "Use IAM roles instead of access keys",
        "Enable versioning for important data",
        "Use lifecycle rules to reduce costs",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        AWS S3 is simple on the surface but extremely powerful.
        Once you understand the basics, it becomes an essential
        building block for scalable systems.
      `,
    },
  ],
}
,
{
  id: 8,
  title: "Environment Variables & Secrets Management in Production",
  slug: "env-secrets-production",
  summary:
    "Best practices for handling secrets securely across environments.",
  contentPreview:
    "Leaking secrets is easier than you think. This post covers secure env handling...",
  tags: ["AWS", "Security"],
  category: "DevOps",
  readingTime: "7 min",
  publishedAt: "2026-02-05",
  updatedAt: null,
  level: "Advanced",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Full-Stack Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Secrets leaks are one of the most common production mistakes.
        API keys, tokens, and credentials must be handled carefully
        across development, staging, and production environments.
      `,
    },

    {
      id: "what-are-secrets",
      title: "What Counts as a Secret?",
      type: "list",
      content: [
        "API keys",
        "Database credentials",
        "JWT secrets",
        "OAuth client secrets",
        "Third-party service tokens",
      ],
    },

    {
      id: "env-basics",
      title: "Using Environment Variables",
      type: "text",
      content: `
        Environment variables allow you to configure applications
        without hardcoding sensitive data into the codebase.
      `,
    },

    {
      id: "env-example",
      title: "Basic .env Example",
      type: "code",
      language: "env",
      content: `
        PORT=4000
        DATABASE_URL=postgres://user:pass@host/db
        JWT_SECRET=super_secret_key
      `,
    },

    {
      id: "dont-do-this",
      title: "Common Mistakes (What NOT To Do)",
      type: "list",
      content: [
        "Committing .env files to Git",
        "Hardcoding secrets in frontend code",
        "Sharing secrets over chat/email",
        "Using the same secrets in all environments",
      ],
    },

    {
      id: "prod-storage",
      title: "Secrets in Production",
      type: "text",
      content: `
        In production, secrets should come from the platform,
        not from files checked into the server.
      `,
    },

    {
      id: "aws-secrets",
      title: "Using AWS Secrets Manager",
      type: "text",
      content: `
        AWS Secrets Manager allows you to store, rotate,
        and securely access secrets at runtime.
      `,
    },

    {
      id: "aws-secrets-example",
      title: "Accessing Secrets in Node.js",
      type: "code",
      language: "js",
      content: `
        const secret = await secretsManager
          .getSecretValue({ SecretId: "prod/db" })
          .promise();
      `,
    },

    {
      id: "frontend-secrets",
      title: "Frontend Environment Variables",
      type: "text",
      content: `
        Frontend environment variables are NOT secrets.
        Anything shipped to the browser can be read by users.
      `,
    },

    {
      id: "frontend-example",
      title: "React Env Example",
      type: "code",
      language: "js",
      content: `
        REACT_APP_API_URL=https://api.myapp.com
      `,
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Keep secrets out of source control",
        "Rotate secrets regularly",
        "Use different secrets per environment",
        "Restrict access with IAM roles",
        "Audit and monitor secret access",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Secure secrets management is not optional in production.
        A small mistake can lead to serious security incidents.
        Invest early in doing this the right way.
      `,
    },
  ],
}
,
{
  id: 9,
  title: "Deploying React + Node.js Together on AWS",
  slug: "deploy-react-node-aws",
  summary:
    "End-to-end deployment of a full MERN stack on AWS.",
  contentPreview:
    "This post explains how I deployed both frontend and backend together on AWS...",
  tags: ["React", "AWS"],
  category: "DevOps",
  readingTime: "9 min",
  publishedAt: "2026-02-08",
  updatedAt: null,
  level: "Advanced",
  status: "published",
  featured: true,
  coverImage:
    "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Full-Stack Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Deploying frontend and backend separately can create
        CORS issues and operational complexity.
        This guide shows how I deploy a full React + Node.js
        stack together on AWS.
      `,
    },

    {
      id: "architecture",
      title: "High-Level Architecture",
      type: "list",
      content: [
        "EC2 for Node.js backend",
        "React build served via Nginx",
        "PM2 for backend process management",
        "Single domain for frontend & API",
      ],
    },

    {
      id: "backend-setup",
      title: "Deploying the Node.js Backend",
      type: "text",
      content: `
        The backend is deployed first,
        as the frontend needs its API endpoint.
      `,
    },

    {
      id: "backend-start",
      title: "Running Backend with PM2",
      type: "code",
      language: "bash",
      content: `
        pm2 start index.js --name api
      `,
    },

    {
      id: "frontend-build",
      title: "Building the React App",
      type: "text",
      content: `
        The frontend is built locally or on the server
        using production environment variables.
      `,
    },

    {
      id: "frontend-build-command",
      title: "Build Command",
      type: "code",
      language: "bash",
      content: `
        npm run build
      `,
    },

    {
      id: "nginx-react",
      title: "Serving React with Nginx",
      type: "text",
      content: `
        Nginx serves the React static files
        and proxies API requests to Node.js.
      `,
    },

    {
      id: "nginx-full-config",
      title: "Nginx Config (Frontend + API)",
      type: "code",
      language: "nginx",
      content: `
        server {
          listen 80;

          location /api {
            proxy_pass http://localhost:4000;
          }

          location / {
            root /var/www/react-app;
            index index.html;
            try_files $uri /index.html;
          }
        }
      `,
    },

    {
      id: "env",
      title: "Environment Configuration",
      type: "text",
      content: `
        Frontend uses build-time env variables,
        backend uses runtime env variables.
      `,
    },

    {
      id: "deployment-tips",
      title: "Deployment Tips",
      type: "list",
      content: [
        "Use a single domain to avoid CORS",
        "Keep frontend and backend logs separate",
        "Enable gzip compression",
        "Use HTTPS in production",
      ],
    },

    {
      id: "scaling",
      title: "Scaling Considerations",
      type: "text",
      content: `
        As traffic grows, consider separating frontend and backend,
        adding load balancers, and using CDN services.
      `,
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        Deploying React and Node together simplifies early stages.
        This setup is cost-effective, predictable,
        and works well for most small to mid-sized apps.
      `,
    },
  ],
}
,
 {
  id: 14,
  title: "How I Set Up CI/CD for a MERN Stack App",
  slug: "ci-cd-mern-stack",
  summary:
    "Automating build and deployment pipelines for MERN stack applications.",
  contentPreview:
    "Manual deployments don’t scale. This article shows how I set up CI/CD step-by-step...",
  tags: ["CI/CD", "DevOps"],
  category: "DevOps",
  readingTime: "8 min",
  publishedAt: "2026-02-14",
  updatedAt: null,
  level: "Advanced",
  status: "published",
  featured: false,
  coverImage:
    "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
  author: {
    name: "Jitendra Saini",
    role: "Full-Stack Developer",
  },

  sections: [
    {
      id: "intro",
      title: "Introduction",
      type: "text",
      content: `
        Manual deployments are slow, risky, and error-prone.
        CI/CD ensures every code change is tested, built,
        and deployed reliably with minimal human intervention.
      `,
    },

    {
      id: "what-is-cicd",
      title: "What Is CI/CD?",
      type: "text",
      content: `
        Continuous Integration (CI) automates code testing and builds,
        while Continuous Deployment (CD) automates releases to production.
      `,
    },

    {
      id: "architecture",
      title: "CI/CD Architecture",
      type: "list",
      content: [
        "GitHub repository for source control",
        "GitHub Actions for CI/CD",
        "EC2 for hosting the MERN app",
        "SSH for secure deployment",
      ],
    },

    {
      id: "repo-structure",
      title: "Repository Structure",
      type: "code",
      language: "bash",
      content: `
        .
        ├── client/
        ├── server/
        ├── .github/workflows/
        └── README.md
      `,
    },

    {
      id: "ci-setup",
      title: "Continuous Integration Setup",
      type: "text",
      content: `
        CI runs on every push to ensure the app builds successfully
        and tests pass before deployment.
      `,
    },

    {
      id: "ci-example",
      title: "CI Workflow Example",
      type: "code",
      language: "yaml",
      content: `
        name: CI

        on: [push]

        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@v3
              - uses: actions/setup-node@v3
                with:
                  node-version: 18
              - run: npm install
              - run: npm test
      `,
    },

    {
      id: "secrets",
      title: "Managing Secrets in CI/CD",
      type: "text",
      content: `
        Secrets like SSH keys and environment variables
        are stored securely using GitHub Secrets.
      `,
    },

    {
      id: "deploy-setup",
      title: "Continuous Deployment Setup",
      type: "text",
      content: `
        After CI passes, the pipeline connects to the server
        and deploys the latest version automatically.
      `,
    },

    {
      id: "deploy-example",
      title: "Deployment Step Example",
      type: "code",
      language: "yaml",
      content: `
        - name: Deploy to EC2
          run: |
            ssh ubuntu@SERVER_IP "cd app && git pull && pm2 restart all"
      `,
    },

    {
      id: "frontend-backend",
      title: "Handling Frontend & Backend Separately",
      type: "list",
      content: [
        "Build React app before deployment",
        "Restart Node.js backend with PM2",
        "Serve frontend via Nginx",
      ],
    },

    {
      id: "rollback",
      title: "Rollback Strategy",
      type: "text",
      content: `
        Always plan for failures.
        Rollbacks can be done using Git tags
        or previous PM2 process states.
      `,
    },

    {
      id: "best-practices",
      title: "Best Practices",
      type: "list",
      content: [
        "Never deploy without CI passing",
        "Use environment-based workflows",
        "Keep pipelines simple",
        "Log and monitor deployments",
      ],
    },

    {
      id: "conclusion",
      title: "Conclusion",
      type: "text",
      content: `
        CI/CD transforms deployments from stressful events
        into routine automation.
        Once set up correctly, it saves time, prevents bugs,
        and scales with your team.
      `,
    },
  ],
}
];
