<?php
// src/Controller/TemplateController.php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class TemplateController extends AbstractController
{
    private $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * @Route("/{template}", name="template")
     */
    public function template(string $template): Response
    {
        if (!$this->twig->getLoader()->exists($template)) {
            throw $this->createNotFoundException('Die angeforderte Seite wurde nicht gefunden');
        }
        return $this->render($template);
    }

    /**
     * @Route("/404", name="not_found")
     */
    public function notFound(): Response
    {
        return $this->render('404.html.twig', [], new Response('', 404));
    }
}
