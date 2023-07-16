<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     *  @Route("/profile", name="profile_alternative_2")
     *  @Route("/profil", name="profile_alternative_3")
     */
    public function index()
    {
        return $this->render('user-profile.html.twig');
    }
}